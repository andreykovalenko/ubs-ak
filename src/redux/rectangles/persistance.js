import { getItem, setItem, removeItem } from "../storage";
const RECTANGLE_IDS = "rectangle-ids";

export function persistRectangle(rectangle) {
  const rectangleIds = getItem(RECTANGLE_IDS) || [];
  rectangleIds.push(rectangle.id);
  setItem(rectangle.id, rectangle);
  setItem(RECTANGLE_IDS, rectangleIds);
}

export function removeRectangle(rectangleId) {
  const rectangleIds = getItem(RECTANGLE_IDS) || [];
  const newIds = rectangleIds.filter(id => id !== rectangleId);
  setItem(RECTANGLE_IDS, newIds);
  removeItem(rectangleId);
}

export function getRectangles(){
  const rectangleIds = getItem(RECTANGLE_IDS) || [];
  return rectangleIds.map(rectangleId => getItem(rectangleId));
}