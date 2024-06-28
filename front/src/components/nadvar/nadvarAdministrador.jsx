import Link from 'next/link';

const NavbarAdministrativo = ({ op1, op2, op3 }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Home">
            <a>{op1}</a>
          </Link>
        </li>
        <li>
          <Link href="/reportes">
            <a>{op2}</a>
          </Link>
        </li>
        <li>
          <Link href="/solicitudes">
            <a>{op3}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarAdministrativo;
