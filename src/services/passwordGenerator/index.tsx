type propsType = {
  length: number;
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export default function GeneratePassword({
  length,
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols,
}: propsType) {
  let password = "";
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCharacters = upperCharacters.toLocaleLowerCase();
  const numbers = "12345678901234567890";
  const symbols = "!@#$%^&*()-_!@#$%^&*()-_";

  for (let i = 0; i < length; i++) {
    const characters =
      (includeUpper ? upperCharacters : "") +
      (includeNumbers ? numbers : "") +
      (includeLower ? lowerCharacters : "") +
      (includeSymbols ? symbols : "");
    if (characters.length < 1) return;
    password += characters[Math.floor(Math.random() * characters.length - 1 + 1)];
  }
  return password;
}
