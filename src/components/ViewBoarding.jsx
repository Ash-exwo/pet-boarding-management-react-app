import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewBoarding = () => {

    const [data, changeData] = useState([])


    const fetchBoardingData = () => {

        axios.get("http://localhost:5003/view-boarding")
            .then(
                (response) => {

                    changeData(response.data)

                }
            )
            .catch(
                (error) => {

                    console.log(error)

                    alert("Failed to view pet boarding details")

                }
            )

    }


    useEffect(() => {

        fetchBoardingData()

    }, [])


    return (

        <div className="pet-page">

            <NavBar/>

            <div className="floating-paw paw-one">🐾</div>
            <div className="floating-paw paw-two">🐾</div>
            <div className="floating-paw paw-three">🐾</div>



            <div className="container-fluid px-4 py-5">


                <div className="pet-card">


                    <div className="text-center pet-header">


                        <div className="pet-icon">

                            🐾

                        </div>



                        <h2 className="pet-title mb-2">

                            VIEW PET BOARDING BOOKINGS

                        </h2>



                        <p className="pet-subtitle mb-5">

                            Manage all comfortable stays booked for your furry friends

                        </p>


                    </div>



                    <div className="table-responsive">


                        <table className="table table-hover align-middle text-center">


                            <thead className="table-light">


                                <tr>

                                    <th>Booking ID</th>

                                    <th>Pet Name</th>

                                    <th>Pet Type</th>

                                    <th>Breed</th>

                                    <th>Age</th>

                                    <th>Weight</th>

                                    <th>Vaccination</th>

                                    <th>Owner Name</th>

                                    <th>Phone</th>

                                    <th>Email</th>

                                    <th>Check In</th>

                                    <th>Check Out</th>

                                    <th>Kennel No.</th>

                                </tr>


                            </thead>



                            <tbody>


                                {
                                    data.length > 0 ?


                                    data.map(
                                        (value, index) => {


                                            return (

                                                <tr key={index}>


                                                    <td className="fw-bold">

                                                        {value.bookingId}

                                                    </td>



                                                    <td className="fw-semibold">

                                                        🐶 {value.petName}

                                                    </td>



                                                    <td>

                                                        <span className="pet-badge">

                                                            {value.petType}

                                                        </span>

                                                    </td>



                                                    <td>

                                                        {value.breed}

                                                    </td>



                                                    <td>

                                                        {value.age} yrs

                                                    </td>



                                                    <td>

                                                        {value.weight} kg

                                                    </td>



                                                    <td>

                                                        <span className="pet-status">

                                                            {value.vaccinationStatus}

                                                        </span>

                                                    </td>



                                                    <td>

                                                        {value.ownerName}

                                                    </td>



                                                    <td>

                                                        {value.ownerPhone}

                                                    </td>



                                                    <td>

                                                        {value.ownerEmail}

                                                    </td>



                                                    <td>

                                                        {value.checkInDate}

                                                    </td>



                                                    <td>

                                                        {value.checkOutDate}

                                                    </td>



                                                    <td>

                                                        <span className="kennel-badge">

                                                            🏠 {value.kennelNumber}

                                                        </span>

                                                    </td>


                                                </tr>

                                            )

                                        }
                                    )


                                    :

                                    <tr>

                                        <td colSpan="13">

                                            No boarding bookings available 🐾

                                        </td>

                                    </tr>

                                }



                            </tbody>


                        </table>


                    </div>


                </div>


            </div>


        </div>

    )

}


export default ViewBoarding