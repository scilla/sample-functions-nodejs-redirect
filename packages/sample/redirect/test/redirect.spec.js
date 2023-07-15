const { main } = require("../redirect");

describe("Redirect App", () => {
  test("Redirect", () => {
    let response = main({ name: "redirect_test" });
    expect(response.body).toEqual("redirecting...");
    expect(response.statusCode).toEqual(302);
    expect(response.headers).toEqual({
      Location: "https://instagram.com/stefanocilla",
    });
  });
});
