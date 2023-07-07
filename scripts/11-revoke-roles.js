import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const token = await sdk.getContract(
      "0xaE9f1a62C176553824bC132AA1D83fE5D45Aaa7D",
      "token"
    );
    //log the curent roles
    const allRoles = await token.roles.getAll();

    console.log("Roles that exist right now: ", allRoles);

    //revoke all power that my wallet has over the erc20
    await token.roles.setAll({ admin: [], minter: [] });
    console.log("Roles after revoking ourselves", await token.roles.getAll());
    console.log("Succesfully revoked authority from erc20");
  } catch (error) {
    console.error("Failed to revoke power from the dao treasury", error);
  }
})();
