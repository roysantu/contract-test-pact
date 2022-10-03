import path from "path";
import { Pact } from "@pact-foundation/pact";
import { AppApi } from "./AppApi";
import { eachLike } from "@pact-foundation/pact/src/dsl/matchers";

const provider = new Pact({
  consumer: "demoConsumerMovies",
  provider: "demoProviderMovies",
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: 2,
});

describe("App api pact contract test", () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe("test /movies", () => {
    test("getting all movies", async () => {
      await provider.addInteraction({
        state: "All movies exists",
        uponReceiving: "verify all items",
        withRequest: {
          method: "GET",
          path: "/movies",
          // headers: {} TODO auth
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: eachLike(
            {
              id: 1,
              movieTitle: "A New Hope",
            },
          ),
        },
      });
    //   {
    //     id: 1,
    //     movieTitle: "A New Hope",
    //   },
    //   {
    //     id: 2,
    //     movieTitle: "The Empire Strikes Back",
    //   },
    //   {
    //     id: 3,
    //     movieTitle: "Return of the Jedi",
    //   },
      //   provider.mockService.baseUrl
      const api = new AppApi(provider.mockService.baseUrl);

      const movies = await api.getAllItems();

      expect(movies).toStrictEqual([
        {
          id: 1,
          movieTitle: "A New Hope",
        },
      ]);
    });
  });
});
