import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { selectCarsLoading } from "../../redux/cars/selectors";
import { bookingSchema } from "../../validation/bookingSchema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../CarBooking/CarBooking.module.css";
import "../../styles/datepicker.css";

export default function CarBooking({ carName }) {
  const isLoading = useSelector(selectCarsLoading);
  const [startDate, setStartDate] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(bookingSchema),
    mode: "onSubmit",
    defaultValues: {
      bookingDate: null,
    },
  });

  // eslint-disable-next-line no-unused-vars
  const handleFormSubmit = (data) => {
    toast.success(`You have booked ${carName} successfully!`);
    reset();
    setStartDate(null);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
      <fieldset className={styles.formFieldset} disabled={isLoading}>
        <h3 className={styles.formTitle}> Book your car now</h3>
        <p className={styles.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={styles.formWrap}>
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              {...register("name")}
              type="text"
              placeholder="Name*"
              autoComplete="off"
            />
          </label>
          {errors.name && (
            <p className={styles.formError}>{errors.name.message}</p>
          )}
        </div>

        <div className={styles.formWrap}>
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              {...register("email")}
              type="email"
              placeholder="Email*"
              autoComplete="off"
            />
          </label>
          {errors.email && (
            <p className={styles.formError}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formWrap}>
          <label className={styles.formLabel}>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setValue("bookingDate", date);
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Booking date"
              className={styles.formInput}
            />
          </label>
          {errors.bookingDate && (
            <p className={styles.formError}>{errors.bookingDate.message}</p>
          )}
        </div>

        <div className={`${styles.formWrap} ${styles.commentInput}`}>
          <label className={styles.formLabel}>
            <input
              className={styles.formInput}
              {...register("comment")}
              type="text"
              placeholder="Comment"
              autoComplete="off"
            />
          </label>
          {errors.comment && (
            <p className={styles.formError}>{errors.comment.message}</p>
          )}
        </div>

        <LoadMoreBtn isLoading={isLoading} type="submit" className={styles.sendBtn}>
          Send
        </LoadMoreBtn>
      </fieldset>
    </form>
  );
}