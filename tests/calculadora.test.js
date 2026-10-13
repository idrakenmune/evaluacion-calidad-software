
const { test } = require("node:test");
const assert = require("node:assert/strict");

const {
  sumar,
  restar,
  multiplicar,
  dividir
} = require("../src/calculadora");

test("sumar dos números", () => {
  assert.equal(sumar(2, 3), 5);
});

test("restar dos números", () => {
  assert.equal(restar(5, 3), 2);
});

test("multiplicar dos números", () => {
  assert.equal(multiplicar(4, 3), 12);
});

test("dividir dos números", () => {
  assert.equal(dividir(10, 2), 5);
});

test("dividir por cero debe generar un error", () => {
  assert.throws(() => dividir(10, 0), {
    message: "No se puede dividir por cero"
  });
});
