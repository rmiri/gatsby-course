import React from "react"
import { useForm } from "react-hook-form"

export default function WebForm() {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name*</label>
      <input
        name="name"
        ref={register({
          required: "Required",
        })}
      />
      {errors.name && errors.name.message}

      <label htmlFor="phone">Phone Number</label>
      <input
        name="phone"
        type="tel"
        // ref={register({
        //   pattern: {
        //     value: "[0-9]{4}-[0-9]{4}-[0-9]{3}",
        //     message: "invalid phone address"
        //   },
        // })}
      />
      {errors.phone && errors.phone.message}

      <label htmlFor="email">Email*</label>
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && errors.email.message}

      <label htmlFor="description">Description*</label>
      <input
        name="description"
        ref={register({
          required: "Required",
          //   validate: value => value !== "admin" || "Nice try!",
        })}
      />
      {errors.description && errors.description.message}

      <button type="submit">Submit</button>
    </form>
  )
}

// export default WebForm;
