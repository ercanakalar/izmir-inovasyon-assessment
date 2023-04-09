const addItemPointer = (className, opacity, pointer) => {
  const formStyle = document.getElementsByClassName(className)[0].style;
  formStyle.opacity = opacity;
  formStyle.pointerEvents = pointer;
};

export default addItemPointer;
