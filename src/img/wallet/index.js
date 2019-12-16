const ServiceLocator = require("ljit-lib/service-locator");
const locator = new ServiceLocator();

locator.register("pink-wallet", require("./pink-wallet.png"));
locator.register("red-wallet", require("./red-wallet.png"));

export default locator;
