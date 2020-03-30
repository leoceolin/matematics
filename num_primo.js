function primo(num) {
  var divisores = 0;

  for (var count = 1; count <= num; count++)
    if (numero % count == 0) divisores++;

  if (divisores == 2) {
    return "É primo";
  } else {
    return "Não é primo";
  }
}
