export default {
  query,
  get,
  post,
  put,
  remove,
}

var STORAGE_KEY = 'BOOKS';

var gBooks = [{
    "id": "OXeMG8wNskc",
    "addedAt": Date.now() - 2000,
    "title": "Gwent",
    "subtitle": "The Definitive Guide",
    "ratings": [3, 5],
    "reviews": [{
      "fullName": 'Daniel',
      "readAt": '1/2/2009',
      "txt": 'I really like this one!'
    }],
    "authors": [
      "David Flanagan"
    ],
    "publishedDate": "2006-08-17",
    "description": "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
    "pageCount": 1032,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
    "language": "English",
    "listPrice": {
      "amount": 109,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "JYOJa2NpSCq",
    "addedAt": Date.now() - 2000,
    "title": "Between Here And Gone",
    "subtitle": "The Definitive Guide",
    "ratings": [],
    "reviews": [{
      "fullName": 'Jenny',
      "readAt": '1/2/2009',
      "txt": 'Fantastic Book!'
    }],
    "authors": [
      "David Flanagan"
    ],
    "publishedDate": 2002,
    "description": "A guide for experienced programmers demonstrates the core JavaScript language, offers examples of common tasks, and contains an extensive reference to JavaScript commands, objects, methods, and properties.",
    "pageCount": 916,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
    "language": "English",
    "listPrice": {
      "amount": 44,
      "currencyCode": "EUR",
      "isOnSale": true
    }
  },
  {
    "id": "1y0Oqts35DQ",
    "addedAt": Date.now() - 2000,
    "title": "Magic Lantern",
    "subtitle": "JavaScript",
    "ratings": [],
    "reviews": [{
      "fullName": 'Adam',
      "readAt": '1/2/2010',
      "txt": 'Just finished read this one! WOW!'
    }],
    "authors": [
      "Peter Kahrel"
    ],
    "publishedDate": "2009-04-05",
    "description": "Author note: In Adobe InDesign CS6, the changes to InDesign's scripting DOM are absolutely minimal. Therefore, the information in this title is valid and up to date for CS6. Updated: August 2010. Author Peter Kahrel updated this Short Cut to cover InDesign CS5. InDesign provides a powerful setof tools for producing beautifuldocuments. While you can certainlydo all your work by hand throughInDesign's graphical interface, thereare many times when it's much easier towrite a script. Once you've automateda task, you can run it over the wholedocument, ensuring consistency, orjust when you need it, simplifying andspeeding your layout process. All ittakes is a bit of JavaScript knowledgeand a willingness to explore InDesign'sprogramming features.",
    "pageCount": 972,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
    "language": "English",
    "listPrice": {
      "amount": 74,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "kSnfIJyikTP",
    "addedAt": Date.now() - 2000,
    "title": "It's Just A Dog",
    "subtitle": "The Missing Manual",
    "ratings": [],
    "reviews": [{
      "fullName": 'Elma',
      "readAt": '1/2/2019',
      "txt": 'S-U-P-E-R!'
    }],
    "authors": [
      "David Sawyer McFarland"
    ],
    "publishedDate": "2008-07-21",
    "description": "JavaScript is an essential language for creating modern, interactive websites, but its complex rules challenge even the most experienced web designers. With JavaScript: The Missing Manual, you'll quickly learn how to use JavaScript in sophisticated ways -- without pain or frustration -- even if you have little or no programming experience. JavaScript expert David McFarland first teaches you the basics by having you build a simple program. Then you'll learn how to work with jQuery, a popular library of pre-built JavaScript components that's free and easy to use. With jQuery, you can quickly build modern, interactive web pages -- without having to script everything from scratch! Learn how to add scripts to a web page, store and manipulate information, communicate with the browser window, respond to events like mouse clicks and form submissions, and identify and modify HTML Get real-world examples of JavaScript in action Learn to build pop-up navigation bars, enhance HTML tables, create an interactive photo gallery, and make web forms more usable Create interesting user interfaces with tabbed panels, accordion panels, and pop-up dialog boxes Learn to avoid the ten most common errors new programmers make, and how to find and fix bugs Use JavaScript with Ajax to communicate with a server so that your web pages can receive information without having to reload",
    "pageCount": 544,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/4.jpg",
    "language": "English",
    "listPrice": {
      "amount": 30,
      "currencyCode": "EUR",
      "isOnSale": true
    }
  },
  {
    "id": "f4iuVmbuKCC",
    "addedAt": Date.now() - 2000,
    "title": "Unbored",
    "subtitle": "interdum per habitasse luctus purus est",
    "ratings": [],
    "reviews": [{
      "fullName": 'Daniel',
      "readAt": '1/2/2020',
      "txt": 'I really like this one!'
    }],
    "authors": [
      "Dustin Diaz",
      "Ross Harmes"
    ],
    "publishedDate": "2008-03-11",
    "description": "With Pro JavaScript Design Patterns, you’ll start with the basics of object-oriented programming in JavaScript applicable to design patterns, including making JavaScript more expressive, inheritance, encapsulation, information hiding, and more. The book then details how to implement and take advantage of several design patterns in JavaScript. Each chapter is packed with real-world examples of how the design patterns are best used and expert advice on writing better code, as well as what to watch out for. Along the way you’ll discover how to create your own libraries and APIs for even more efficient coding.",
    "pageCount": 269,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
    "language": "Spanish",
    "listPrice": {
      "amount": 19,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "U2rfZO6oBZf",
    "addedAt": Date.now() - 2000,
    "title": "Book Title",
    "subtitle": "The Definitive Guide",
    "ratings": [],
    "reviews": [{
      "fullName": 'Shila',
      "readAt": '1/3/2020',
      "txt": 'Everyone must reat that!'
    }],
    "authors": [
      "David Flanagan"
    ],
    "publishedDate": 2002,
    "description": "A guide for experienced programmers demonstrates the core JavaScript language, offers examples of common tasks, and contains an extensive reference to JavaScript commands, objects, methods, and properties.",
    "pageCount": 916,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
    "language": "English",
    "listPrice": {
      "amount": 91,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "xI0wrXaaAcq",
    "addedAt": Date.now() - 2000,
    "title": "The Sith Empire Will Rise Again",
    "subtitle": "And We Are The Spark",
    "ratings": [],
    "reviews": [{
      "fullName": 'Daniel',
      "readAt": '1/2/2009',
      "txt": 'It was the 3rd time i\'ve read that! so great!'
    }],
    "authors": [
      "Peter Kahrel"
    ],
    "publishedDate": "2009-04-05",
    "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
    "pageCount": 65,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
    "language": "English",
    "listPrice": {
      "amount": 90,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "9laHCEdSpFy",
    "addedAt": Date.now() - 2000,
    "title": "The Ode Less Travelled",
    "subtitle": "The Missing Manual",
    "ratings": [],
    "reviews": [{
      "fullName": 'Dan',
      "readAt": '1/2/2009',
      "txt": 'Just amazing!'
    }],
    "authors": [
      "David Sawyer McFarland"
    ],
    "publishedDate": "2008-07-21",
    "description": "JavaScript is an essential language for creating modern, interactive websites, but its complex rules challenge even the most experienced web designers. With JavaScript: The Missing Manual, you'll quickly learn how to use JavaScript in sophisticated ways -- without pain or frustration -- even if you have little or no programming experience. JavaScript expert David McFarland first teaches you the basics by having you build a simple program. Then you'll learn how to work with jQuery, a popular library of pre-built JavaScript components that's free and easy to use. With jQuery, you can quickly build modern, interactive web pages -- without having to script everything from scratch! Learn how to add scripts to a web page, store and manipulate information, communicate with the browser window, respond to events like mouse clicks and form submissions, and identify and modify HTML Get real-world examples of JavaScript in action Learn to build pop-up navigation bars, enhance HTML tables, create an interactive photo gallery, and make web forms more usable Create interesting user interfaces with tabbed panels, accordion panels, and pop-up dialog boxes Learn to avoid the ten most common errors new programmers make, and how to find and fix bugs Use JavaScript with Ajax to communicate with a server so that your web pages can receive information without having to reload",
    "pageCount": 544,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
    "language": "Englsih",
    "listPrice": {
      "amount": 176,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "nGhVwZvGCGp",
    "addedAt": Date.now() - 2000,
    "title": "The Unsung Hero",
    "subtitle": "",
    "ratings": [],
    "reviews": [{
      "fullName": 'Daniel',
      "readAt": '1/2/2009',
      "txt": 'The best book ever!'
    }],
    "authors": [
      "Dustin Diaz",
      "Ross Harmes"
    ],
    "publishedDate": "2008-03-11",
    "description": "With Pro JavaScript Design Patterns, you’ll start with the basics of object-oriented programming in JavaScript applicable to design patterns, including making JavaScript more expressive, inheritance, encapsulation, information hiding, and more. The book then details how to implement and take advantage of several design patterns in JavaScript. Each chapter is packed with real-world examples of how the design patterns are best used and expert advice on writing better code, as well as what to watch out for. Along the way you’ll discover how to create your own libraries and APIs for even more efficient coding.",
    "pageCount": 269,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/9.jpg",
    "language": "English",
    "listPrice": {
      "amount": 116,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "Q8Q9Lsd03BD",
    "addedAt": Date.now() - 2000,
    "title": "The Rise Of The Russian Empire",
    "subtitle": "",
    "ratings": [],
    "reviews": [{
      "fullName": 'John',
      "readAt": '1/2/2009',
      "txt": 'Brilliant!'
    }],
    "authors": [
      "Emily A. Vander Veer"
    ],
    "publishedDate": "2004-10-28",
    "description": "Responding to reader feedback, the author has thoroughly revamped the book with more step-by-step coverage of JavaScript basics, an exclusive focus on Internet Explorer, and many complete sample scripts Updated to cover JavaScript 1.5, the latest release of this popular Web scripting language Using lots of examples, including a sample working Web site, the book shows how to create dynamic and interactive pages, build entire sites, and automate pages",
    "pageCount": 432,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
    "language": "English",
    "listPrice": {
      "amount": 145,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "bd7a76kARao",
    "addedAt": Date.now() - 2000,
    "title": "Holes",
    "subtitle": "The Good Parts",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Douglas Crockford"
    ],
    "publishedDate": "2008-05-08",
    "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
    "pageCount": 172,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
    "language": "English",
    "listPrice": {
      "amount": 157,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  },
  {
    "id": "qKyG0vqeO3e",
    "addedAt": Date.now() - 2000,
    "title": "Schisms",
    "subtitle": "",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Paul McFedries"
    ],
    "publishedDate": "2001",
    "description": "\"Special Edition Using JavaScript\" contains an overview of JavaScript, programming fundamentals, basic objects, working with browser windows, working with the document object, working with forms and dynamic HTML .",
    "pageCount": 896,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
    "language": "Spanish",
    "listPrice": {
      "amount": 57,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "2RvT48ZNInj",
    "addedAt": Date.now() - 2000,
    "title": "Fantasy",
    "subtitle": "Making App Store Apps Without Objective-C or Cocoa",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Jonathan Stark"
    ],
    "publishedDate": "2010-01-08",
    "description": "What people are saying about Building iPhone Apps w/ HTML, CSS, and JavaScript \"The future of mobile development is clearly web technologies like CSS, HTML and JavaScript. Jonathan Stark shows you how to leverage your existing web development skills to build native iPhone applications using these technologies.\" --John Allsopp, author and founder of Web Directions \"Jonathan's book is the most comprehensive documentation available for developing web applications for mobile Safari. Not just great tech coverage, this book is an easy read of purely fascinating mobile tidbits in a fun colloquial style. Must have for all PhoneGap developers.\" -- Brian LeRoux, Nitobi Software It's a fact: if you know HTML, CSS, and JavaScript, you already have the tools you need to develop your own iPhone apps. With this book, you'll learn how to use these open source web technologies to design and build apps for the iPhone and iPod Touch on the platform of your choice-without using Objective-C or Cocoa. Device-agnostic mobile apps are the wave of the future, and this book shows you how to create one product for several platforms. You'll find guidelines for converting your product into a native iPhone app using the free PhoneGap framework. And you'll learn why releasing your product as a web app first helps you find, fix, and test bugs much faster than if you went straight to the App Store with a product built with Apple's tools. Build iPhone apps with tools you already know how to use Learn how to make an existing website look and behave like an iPhone app Add native-looking animations to your web app using jQTouch Take advantage of client-side data storage with apps that run even when the iPhone is offline Hook into advanced iPhone features -- including the accelerometer, geolocation, and vibration -- with JavaScript Submit your applications to the App Store with Xcode This book received valuable community input through O'Reilly's Open Feedback Publishing System (OFPS).",
    "pageCount": 186,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/13.jpg",
    "language": "en",
    "listPrice": {
      "amount": 167,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "5z2s9pDXAYj",
    "addedAt": Date.now() - 2000,
    "title": "You Can't Be An Astronaut",
    "subtitle": "It's Just Not Realistic",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Nicholas C. Zakas"
    ],

    "publishedDate": "2005-04-22",
    "description": "Dispels the myth that JavaScript is a \"baby\" language and demonstrates why it is the scripting language of choice used in the design of millions of Web pages and server–side applications Quickly covers JavaScript basics and then moves on to more advanced topics such as object–oriented programming, XML, Web services, and remote scripting Addresses the many issues that Web application developers face, including internationalization, security, privacy, optimization, intellectual property issues, and obfuscation Builds on the reader′s basic understanding of HTML, CSS, and the Web in general This book is also available as part of the 4–book JavaScript and Ajax Wrox Box (ISBN: 0470227818). This 4–book set includes: Professional JavaScript for Web Developers (ISBN: 0764579088) Professional Ajax 2nd edition (ISBN: 0470109491) Professional Web 2.0 Programming (ISBN: 0470087889) Professional Rich Internet Applications: Ajax and Beyond (ISBN: 0470082801)",
    "pageCount": 646,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
    "language": "Hebrew",
    "listPrice": {
      "amount": 150,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "zBZu5cDEWha",
    "addedAt": Date.now() - 2000,
    "title": "Old Tractors",
    "subtitle": "And The Men Who Love Them",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Jin Yong"
    ],
    "publishedDate": 2011,
    "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
    "pageCount": 583,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/15.jpg",
    "language": "English",
    "listPrice": {
      "amount": 58,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  },
  {
    "id": "aOI7tQuPZ2f",
    "addedAt": Date.now() - 2000,
    "title": "Beat Your Way To The Top",
    "subtitle": "",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 2011,
    "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
    "pageCount": 497,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
    "language": "English",
    "listPrice": {
      "amount": 78,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "WBooB82Uvwu",
    "addedAt": Date.now() - 2000,
    "title": "Don't Panic",
    "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 1999,
    "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
    "pageCount": 804,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
    "language": "English",
    "listPrice": {
      "amount": 118,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "xm1z5bbZjlS",
    "addedAt": Date.now() - 2000,
    "title": "How To Defend Yourself Against Alien Abduction",
    "subtitle": "",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 1999,
    "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
    "pageCount": 231,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/18.jpg",
    "language": "Hebrew",
    "listPrice": {
      "amount": 60,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "u3j6QIKLlJb",
    "addedAt": Date.now() - 2000,
    "title": "How To Start Your Own Country",
    "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
    "ratings": [],
    "reviews": [],
    "authors": [
      "Agatha Christie"
    ],
    "publishedDate": 1978,
    "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
    "pageCount": 652,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/19.jpg",
    "language": "Hebrew",
    "listPrice": {
      "amount": 110,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "vxYYYdVlEH3",
    "addedAt": Date.now() - 2000,
    "title": "Akarnae",
    "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
    "ratings": [],
    "reviews": [],
    "authors": [
      "William Shakespeare"
    ],
    "publishedDate": 2011,
    "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
    "pageCount": 904,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
    "language": "Spanish",
    "listPrice": {
      "amount": 186,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  }
]

window.gBooks = gBooks;

function query() {
  const books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || _save(STORAGE_KEY, gBooks)
  return Promise.resolve(books)
}

async function get(id) {
  const books = await query()
  const book = books.find(book => book.id === id)
  return Promise.resolve(book)
}

async function post(newBook) {
  newBook.id = _makeId()
  let books = await query(STORAGE_KEY)
  books.unshift(newBook);
  _save(STORAGE_KEY, books)
  return Promise.resolve(newBook);
}

async function put(updatedBook) {
  let books = await query(STORAGE_KEY)
  books = books.map(book => {
    if (book.id === updatedBook.id) return updatedBook
    return book
  })
  _save(STORAGE_KEY, books)
  return Promise.resolve(books);
}

async function remove(id) {
  let books = await query(STORAGE_KEY)
  books = books.filter(book => book.id !== id)
  _save(STORAGE_KEY, books)
  return Promise.resolve()
}

function _save(STORAGE_KEY, entities) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entities))
  return Promise.resolve(entities)
}

function _makeId(length = 5) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
