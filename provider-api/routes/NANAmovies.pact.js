const { Verifier } = require("@pact-foundation/pact");
const controller = require("./Movie.controller");
const Movie = require("./Movie");

const app = require("express")();
app.use(require("./movies.routes"));

const server = app.listen("3000");

describe("pact verification", () => {
  it("Validate /movies consumer contract", async () => {
    return new Verifier({
      providerBaseUrl: "http://localhost:3000",
      pactUrls: [
        path.resolve(
          process.cwd(),
          "../provider-api/pact-contract/demoConsumerMovies-demoProviderMovies.json"
        ),
      ],
    })
      .verifyProvider()
      .then(() => {
        console.log("Pact Verification Completed!");
      });
  });
});
