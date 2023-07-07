import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0xB0d390422d3D6d5158b2a59b70b49DAab4632aB9",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "Temporal Watcher",
        description:
          "Temporal Watcher is a prestigious NFT that grants exclusive access to the revolutionary DAO project. Holders become a guardian of time, entrusted with the responsibility to curate and validate the historical events of crypto/NFT projects. As a key holder, you join a select group of individuals shaping the narrative and transparency of the industry. Propose, vote, and influence the timeline to ensure accurate and reliable information and contribute to building a trustworthy foundation for informed decision-making in the crypto space.",
        image: readFileSync("scripts/assets/DAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
