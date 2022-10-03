const { Verifier } = require("@pact-foundation/pact");
const controller = require("../routes/Movie.controller");
const Movie = require("../routes/Movie");
const path = require("path");

const app = require("express")();
app.use(require("../routes/movies.routes"));

const server = app.listen("8080");

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
