import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./quality";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Qualitie {...qual} key={qual._id} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array
};

export default QualitiesList;
