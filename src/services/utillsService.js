export default {
  getRatingAvg,
  getBookPrice,
  formatBookToDb,
  filterBooks,
  getEmptyBook,
  IsUserOnMobileOrTablet,
  IsAppleUser
}

function getBookPrice(book) {
  const {
    listPrice
  } = book;
  const currSymbol = _getCurrencySymbol(
    listPrice.currencyCode
  );
  return listPrice.amount.toString() + currSymbol;

}

function _getCurrencySymbol(currencyCode) {
  switch (currencyCode) {
    case 'USD':
      return '$' // US Dollar
    case 'EUR':
      return '€' // Euro;
    case 'CRC':
      return '₡' // Costa Rican Col;
    case 'GBP':
      return '£' // British Pound S;
    case 'ILS':
      return '₪' // Israeli New She;
    case 'INR':
      return '₹' // Indian Rupee;
    case 'JPY':
      return '¥' // Japanese Yen;
    case 'KRW':
      return '₩' // South Korean Wo;
    case 'NGN':
      return '₦' // Nigerian Naira;
    case 'PHP':
      return '₱' // Philippine Peso;
    case 'PLN':
      return 'zł' // Polish Zloty;
    case 'PYG':
      return '₲' // Paraguayan Guar;
    case 'THB':
      return '฿' // Thai Baht;
    case 'UAH':
      return '₴' // Ukrainian Hryvn;
    case 'VND':
      return '₫' // Vietnamese Dong ;
  }
};

function getRatingAvg(book) {
  const {
    ratings
  } = book;
  if (!ratings || ratings.length === 0) return;
  const avg = ratings.reduce((a, b) => a + b) / ratings.length;
  return Math.round(avg);
}

function formatBookToDb(newBook, bookToAdd) {
  newBook.title = bookToAdd.title;
  newBook.rating = bookToAdd.averageRating ? bookToAdd.averageRating : newBook.rating
  newBook.subtitle = bookToAdd.subtitle ? bookToAdd.subtitle : newBook.subtitle;
  newBook.authors = bookToAdd.authors ? bookToAdd.authors : newBook.authors
  newBook.publishedDate = bookToAdd.publishedDate ? bookToAdd.publishedDate : newBook.publishedDate
  newBook.description = bookToAdd.description ? bookToAdd.description : newBook.description
  newBook.pageCount = bookToAdd.pageCount ? bookToAdd.pageCount : newBook.pageCount
  newBook.categories = bookToAdd.categories ? bookToAdd.categories : newBook.categories
  newBook.thumbnail = bookToAdd.imageLinks.thumbnail ? bookToAdd.imageLinks.thumbnail : newBook.thumbnail
  return newBook
}

function filterBooks(books, filterBy) {
  const {
    title,
    maxPrice
  } = filterBy
  const filterTitle = title ? `${title}\w*` : ''
  const regExp = new RegExp(filterTitle, 'i')
  return books?.filter((book) => {
    return (
      regExp.test(book.title) &&
      book.listPrice?.amount < (maxPrice || Infinity)
    )
  })
}

function getEmptyBook(title = 'New Boook', amount = _getRandomIntInclusive(5, 500), thumbnail = "http://coding-academy.org/books-photos/20.jpg") {
  const book = {
    addedAt: Date.now(),
    title: "",
    subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
    ratings: [],
    reviews: [],
    authors: [
      'Barbara Cartland',
      'Tal'
    ],
    publishedDate: _getRandomIntInclusive(1930, 2020),
    description: "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
    pageCount: _getRandomIntInclusive(15, 1000),
    categories: [
      'Computers',
      'Hack'
    ],
    thumbnail,
    language: "English",
    listPrice: {
      amount,
      currencyCode: "EUR",
      isOnSale: true
    }
  }
  return book
}

function _getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function IsUserOnMobileOrTablet() {
  let check = false;
  const userSystem = navigator.userAgent || navigator.vendor || window.opera
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userSystem) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userSystem.substr(0, 4))) check = true;
  return check
};

function IsAppleUser() {
  let check = false;
  const userSystem = navigator.userAgent || navigator.vendor || window.opera
  if (/ip(hone|od)/i.test(userSystem)) check = true
  return check
};
