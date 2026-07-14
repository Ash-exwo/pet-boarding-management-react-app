import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddBoarding = () => {

    const [input, changeInput] = useState(
        {
            bookingId: "",
            petName: "",
            petType: "",
            breed: "",
            age: "",
            weight: "",
            vaccinationStatus: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            checkInDate: "",
            checkOutDate: "",
            kennelNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:5003/add-boarding", input).then(
            (response) => {

                console.log(response.data)

                alert("Pet boarding booked successfully")

            }
        ).catch(
            (error) => {

                console.log(error)

                alert("Failed to add pet boarding booking")

            }
        )
    }

    return (

        <div className="pet-page">

            <NavBar/>

            <div className="floating-paw paw-one">🐾</div>
            <div className="floating-paw paw-two">🐾</div>
            <div className="floating-paw paw-three">🐾</div>

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-10">

                        <div className="pet-card">

                            <div className="text-center pet-header">

                                <div className="pet-icon">
                                    🐾
                                </div>

                                <h2 className="pet-title mb-2">
                                    PET BOARDING BOOKING
                                </h2>

                                <p className="pet-subtitle mb-5">
                                    A comfortable and caring stay for your furry companion
                                </p>

                            </div>


                            <div className="row g-4">

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Booking ID
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="bookingId"
                                        value={input.bookingId}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Pet Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="petName"
                                        value={input.petName}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Pet Type
                                    </label>

                                    <select
                                        className="form-control"
                                        name="petType"
                                        value={input.petType}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select Pet Type</option>
                                        <option>Dog</option>
                                        <option>Cat</option>
                                        <option>Bird</option>
                                        <option>Rabbit</option>
                                        <option>Other</option>
                                    </select>
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Breed
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="breed"
                                        value={input.breed}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Age
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="age"
                                        value={input.age}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Weight (kg)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="weight"
                                        value={input.weight}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Vaccination Status
                                    </label>

                                    <select
                                        className="form-control"
                                        name="vaccinationStatus"
                                        value={input.vaccinationStatus}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select Status</option>
                                        <option>Fully Vaccinated</option>
                                        <option>Partially Vaccinated</option>
                                        <option>Not Vaccinated</option>
                                    </select>
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Kennel Number
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="kennelNumber"
                                        value={input.kennelNumber}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Owner Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ownerName"
                                        value={input.ownerName}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Owner Phone
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ownerPhone"
                                        value={input.ownerPhone}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Owner Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="ownerEmail"
                                        value={input.ownerEmail}
                                        onChange={inputHandler}
                                        placeholder="example@gmail.com"
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Check-in Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        name="checkInDate"
                                        value={input.checkInDate}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Check-out Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                        name="checkOutDate"
                                        value={input.checkOutDate}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col-12 text-center mt-5">

                                    <button
                                        className="pet-submit-btn"
                                        onClick={readValue}
                                    >
                                        🐾 BOOK PET STAY
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddBoarding