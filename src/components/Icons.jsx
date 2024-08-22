function Icons() {
  return (
    <div className="flex justify-around">
      {/* Ícono 1: Ofertas Prime */}
      <button aria-label="ofertas Prime">
        <div className="tw-svg p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-white fill-current"
          >
            <path
              fillRule="evenodd"
              d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      {/* Ícono 2: Abrir notificaciones */}
      <button aria-label="Abrir notificaciones">
        <div className="tw-svg p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-white fill-current"
          >
            <path
              fillRule="evenodd"
              d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      {/* Ícono 3: Cerrar */}
      <button aria-label="Cerrar">
        <div className="tw-svg p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-white fill-current"
          >
            <path
              fillRule="evenodd"
              d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      {/* Ícono 4: Comprar Bits */}
      <button aria-label="Comprar Bits">
        <div className="tw-svg p-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-white fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Icons;
