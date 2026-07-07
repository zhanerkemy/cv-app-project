import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import TimeLine from "../TimeLine";
import { fetchEducation } from "../../store/educationSlice";

import "./EducationSection.scss";

const EducationSection = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="education-section__loader">
        <FontAwesomeIcon icon={faSyncAlt} spin />
      </div>
    );
  }

  if (error) {
    return <div className="education-section__error">{error}</div>;
  }

  return <TimeLine data={items} />;
};

export default EducationSection;