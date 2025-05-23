(function () {
  const theShift = 5; // Beware the Ides of March…

  function etTuBrute(text, shift) {
    return text.replace(/[a-zA-Z]/g, function (c) {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(
        ((c.charCodeAt(0) - base + (26 - shift)) % 26) + base
      );
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const pigeon = document.getElementById("pigeon");
    if (pigeon) {
      const encodedScroll = pigeon.getAttribute("data-encoded");
      const decrypted = etTuBrute(encodedScroll, theShift);
      pigeon.href = "mailto:" + decrypted;
    }
  });
})();
