const Cryptography = require("../../Utils/Cryptography");

let Password = "WellcomeToTheSeaDogsArena";
let PasswordHash = "";

test('Encrypt Password', async () => {
    PasswordHash = await Cryptography.cryptPassword(Password);
    expect(PasswordHash).not.toBeUndefined();
});

test('Compare Encrypted Password', async () => {
    expect(await Cryptography.comparePassword(Password, PasswordHash)).toBe(true);
});