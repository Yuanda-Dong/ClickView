'use client'

import { Container, Nav, Navbar } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import ClickViewLogo from './clickview-logo';

export default function Navigation() {
  const pathname = usePathname();

  function getLinkProps(href: string, className?: string) {
    return {
      href,
      className: `nav-link ${href === pathname ? 'active' : ''} ${className}`
    };
  }
  
  return (
    <Navbar bg='light' expand='lg' className='mb-4'>
      <Container>
        <Link {...getLinkProps('/', 'd-block navbar-brand me-5')} style={{ width: '150px' }}>
          <ClickViewLogo />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link {...getLinkProps('/playlists')}>Playlists</Link>
            <Link {...getLinkProps('/videos')}>Videos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}