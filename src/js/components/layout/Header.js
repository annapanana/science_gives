import React from "react";
import '../../../sass/components/shared/header.sass'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div class="header-wrap">
        Header
      </div>
    )
  }
}
