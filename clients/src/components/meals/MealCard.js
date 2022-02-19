import * as PropTypes from "prop-types";
import React from "react";

export function MealCard(props) {
  const {
    onItemAdd,
    meal: { description, name, price, total },
    onItemRemove
  } = props;
  return (
    <div className="col s12 m12">
      <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {name} - Rs. {price}
          </span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a className="waves-effect waves-light btn-small">
            <i onClick={onItemAdd} className="material-icons right">
              add
            </i>
            {total || 0}
            <i onClick={onItemRemove} className="material-icons left">
              remove
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.any,
  onItemAdd: PropTypes.func,
  onItemRemove: PropTypes.func
};
