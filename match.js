function match(age1, zip1, country1, lang1, age2, zip2, country2, lang2){

  if abs(age1 - age2) > 10 {
    return true;
  }

  if country1 == country2 {
    return true;
  }

  if abs(zip1-zip2) > 5 {
    return true;
  }

  return false;

}
