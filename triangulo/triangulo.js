export function tipoTriangulo(a,b,c) {
	if (a >= b + c || b >= a + c || c >= a + b) return "inválido";

	if (a === b && b === c) return "equilátero";
		else if (a === b | a === c | b === c) return "isósceles";
		else return "escaleno"
}
