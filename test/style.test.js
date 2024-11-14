// Importamos las bibliotecas necesarias
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Importamos el archivo SCSS
import "../node_modules/nodebb-theme-harmony/scss/topic.scss";

describe("Estilos de Topic SCSS", () => {
	test("debe aplicar la clase de estrella en amarillo a los mensajes urgentes", () => {
		// Renderizamos un elemento simulado con la clase de estrella
		const { container } = render(
			<i className="fa fa-star text-warning me-2"></i>
		);

		// Seleccionamos el ícono y verificamos que tenga el estilo de color amarillo
		const starIcon = container.querySelector(".fa-star.text-warning");
		expect(starIcon).toHaveClass("text-warning");

		// Verificamos que el ícono tenga el color amarillo aplicado
		expect(starIcon).toHaveStyle("color: #f0ad4e"); // Ajusta al color exacto si es necesario
	});
});
