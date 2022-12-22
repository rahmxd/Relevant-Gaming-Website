import React from 'react'
import {render, screen, within} from '@testing-library/react'
import Header from '../Header'

it('should render 7 items in navbar', () => {
    render(<Header/>)
    const list = screen.getByRole("list", {
        name: /navbar-items/i,
    })
    const {getAllByRole} = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(7);
   


})

it('should render list of navbar options', () => {
    render(<Header/>)
    const list = screen.getByRole("list", {
        name: /navbar-items/i,
    })
    expect(list).toMatchInlineSnapshot(`
<ul
  aria-label="navbar-items"
  class="header-navbar"
>
  <li>
    Home
  </li>
  <li>
    About
  </li>
  <li>
    Teams
  </li>
  <li>
    Schedule
  </li>
  <li>
    Testimonials
  </li>
  <li>
    Partners
  </li>
  <li>
    Contact
  </li>
</ul>
`)


})

