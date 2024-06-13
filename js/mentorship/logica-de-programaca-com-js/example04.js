function submitExample04(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea");
  $scenario = document.querySelector("#" + targetId + " .scenario");

  submitCode(event, targetId, $scenario, $textarea, [
    [
      'var $boy01 = fantasia(pegarElemento("example04_Boy01"), "indio");',
      'var $boy02 = fantasia(pegarElemento("example04_Boy02"), "enfermeiro");',
      "function fantasiasBloqueadas(usuario) {",
      'if (usuario.fantasia == "indio") {',
      "removerDoCarnaval(usuario)",
      "}",
      "}",
      "fantasiasBloqueadas($boy01)",
      "fantasiasBloqueadas($boy02)",
    ],
    [
      'var $boy01 = fantasia(pegarElemento("example04_Boy01"), "indio");',
      'var $boy02 = fantasia(pegarElemento("example04_Boy02"), "enfermeiro");',
      "function fantasiasBloqueadas(usuario) {",
      'if (usuario.fantasia === "indio") {',
      "removerDoCarnaval(usuario)",
      "}",
      "}",
      "fantasiasBloqueadas($boy01)",
      "fantasiasBloqueadas($boy02)",
    ],
    [
      'var $boy01 = fantasia(pegarElemento("example04_Boy01"), "indio");',
      'var $boy02 = fantasia(pegarElemento("example04_Boy02"), "enfermeiro");',
      "function fantasiasBloqueadas(usuario) {",
      'if ("indio" == usuario.fantasia) {',
      "removerDoCarnaval(usuario)",
      "}",
      "}",
      "fantasiasBloqueadas($boy01)",
      "fantasiasBloqueadas($boy02)",
    ],
    [
      'var $boy01 = fantasia(pegarElemento("example04_Boy01"), "indio");',
      'var $boy02 = fantasia(pegarElemento("example04_Boy02"), "enfermeiro");',
      "function fantasiasBloqueadas(usuario) {",
      'if ("indio" === usuario.fantasia) {',
      "removerDoCarnaval(usuario)",
      "}",
      "}",
      "fantasiasBloqueadas($boy01)",
      "fantasiasBloqueadas($boy02)",
    ],
  ]);
}
