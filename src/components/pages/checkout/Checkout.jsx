export const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <div>
      <h1>Aca va el checkout</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturar}
          name="name"
        />

        <input
          type="text"
          placeholder="Ingresa tu apellido"
          onChange={capturar}
          name="lastName"
        />

        <button type="submit">enviar</button>
      </form>
    </div>
  );
};
