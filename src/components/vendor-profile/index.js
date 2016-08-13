import React from 'react';
import NavLink from '../shared/NavLink';

class VendorProfile extends React.Component {

  render() {
    return (
      <div className="page">
        <h2>Vendor Profile</h2>
        <p>
          JAH Engineering is a service disabled veteran owned 
          small business (SDVOSB), operating under NAICS code 541511.
        </p>
        <p>
          If you are a prime contractor or subcontractor looking 
          for partnership opportunities, please feel free to 
          <NavLink to="/contact">contact</NavLink> us.
        </p>
      </div>
    );
  }

}

export default VendorProfile;
