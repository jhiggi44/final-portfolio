$(document).ready(function () {

  //initialize tabs
  $('ul.tabs').tabs('select_tab', 'tab_id');

  // $('#spec-work-tabs').tabs({
  //   swipeable: true
  // });

  //initialize collapsible
  $('.collapsible').collapsible();


  $(document).ready(function () {
    $('.tooltipped').tooltip({
      delay: 50
    });
  });

  //initialize parallax
  $('.parallax').parallax();

  // Initialize collapse button
  $(".button-collapse").sideNav();

  $('.button-collapse').sideNav({
    menuWidth: 400, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens
  });



  // Changing the navBar when scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
      $(".navColor").css({
        "background-color": "#004d40"
      });
      // $(".navFont").css({
      //   "color": "white"
      // });
      $(".nav-text").removeClass("red-text");
      $(".nav-text").addClass("white-text");
    } else {
      $(".navColor").css({
        "background-color": "white"
      });
      // $(".navFont").css({
      //   "color": "#b71c1c"
      // });
      $(".nav-text").removeClass("white-text");
      $(".nav-text").addClass("red-text");
    }
  })


  //News Page Javascript

  var newsArticles = [{
      newsTitle: "Finding Common Ground in Different Religions",
      newsAuthor: "By: Jordan Higgins",
      newsDate: "March 8, 2017",
      newsLink: "(As seen in Print and" + "<a href='http://dailyutahchronicle.com/2017/03/08/finding-common-ground-different-religions/' target='_blank'>" + " online" + "</a>" + " at The Daily Utah Chronicle)",
      newsContent: [

        "University of Utah student Carly Harris was serving tea in a refugee camp in Greece when she met Soufiane El Yassami, a refugee from Morocco. During her stay El Yassami was arrested and repatriated to Morocco. Worried, Harris sent El Yassami a Facebook message to see if he was safe. Since then, the two have communicated over Skype and Facebook and now, almost a year and a half later, they are discussing marriage.",

        '“He’s asked me to marry him a thousand times,” Harris said, a smile crossing her face.',

        'With each proposal, she tells El Yassami they would be skipping steps. While he is sure that love is enough, Harris wants to make sure their relationship is secure.<img src="http://dailyutahchronicle.com/wp-content/uploads/courtesy-157x280.jpg" alt="Carly" align="right" class="imageRight">',

        '“I believe it takes more than love to make a relationship work, and there are a lot of issues we’ve got to handle with our religions,” she said.',

        'Harris is a member of the Church of Jesus Christ of Latter-day Saints and El Yassami is Muslim and both are active members of their faith.',

        '“Even though we have different religions, we are both very religious and we understand each other,” Harris explained. “I’ve dated people who weren’t raised religious before, and it’s different. They just don’t get it but he gets it.”',

        'In fact, his dedication impressed Harris early in their relationship. For example, during Ramadan (the ninth month of the Islamic calendar) El Yassami fasts every day until sundown. Once she asked him why he is so devoted to this practice.',

        '“He was so confused,” Harris recalled. “Like, ‘What do you mean why do I do this? Because God asked me to. Of course, I do it for him.’ He has a lot of faith.”',

        'Beyond stumbling into an improbable relationship during a humanitarian trip to Greece, she has had plenty of other experiences while serving in Fiji, Nepal, Argentina and Brazil. One day while boarding a ferry with her cousin in Greece, a man offered her his first-class ticket. After she refused to take it, the man insisted.',

        'Harris remembered the man saying, “Seeing you guys help my people just made me want to help someone, and right now this is all I can do, so please, take the ticket.” She said,“we were just sobbing. There were lots of stories like that going around the camp. There was just a chain reaction of kindness.”',

        'Harris’ experiences abroad have changed the way she thinks and lives. After one trip, she decided she didn’t even need a phone.',

        '“When I lived in Fiji, it was the first time I didn’t have a phone, and I was like, ‘This is amazing.’ I decided I was going to cancel my phone when I got home. That was four years ago.”',

        '<img src="http://dailyutahchronicle.com/wp-content/uploads/courtesy2-158x280.jpg" alt="Carly" align="left" class="imageLeft">Not having a phone has provided her with new perspectives on our culture.',

        'People don’t expect you to keep your word if they don’t hear from you that day, or if you’re not like, ‘Hey I am on my way,’ or ‘Hey I’m here,’” Harris said. “I’ll ring the doorbell and everyone is like, ‘Oh my gosh, you came!’ like it’s such a big deal. And I’m just thinking, I told you I was coming.”',
        'She accepted a job teaching English in Guinea-Bissau, a Portuguese-speaking country in Africa, where Harris and El Yassami will live this summer. Harris was offered the job before she met El Yassami, but didn’t accept it until after she visited him in Morocco for 10 days. After assessing their relationship, she invited him to move to Guinea-Bissau with her.',

        'Harris plans to head to Indonesia or South Korea after her summer in Guinea-Bissau, where she will teach English. Then she plans to move to another country to teach English. She will do that “every year or two for the next 10 years or so,” Harris said.',

        'Harris made headlines recently after' + '<a href="http://www.cnn.com/2017/02/14/world/heart-of-the-matter-love-defies-borders/index.html" target="_blank">' + ' CNN reported ' + '</a>' + 'on her long distance relationship and how it was affected by President Donald Trump’s executive order that attempted to ban refugees from entering the United States. Contrary to what news stations have reported, the couple never wanted to live in the U.S.',

        '“He did want to come and visit, but just for a week or two to meet my family and stuff. The plan was never to live here permanently,” said Harris.',

        'El Yassami hasn’t changed Harris’ career plans. Even before the couple met, Harris planned on living and teaching English in numerous countries after college.',
        'I’ve just been here 20-something years and I feel like there is so much more to see. I don’t really agree with our culture, our values, our selfishness, our competitiveness. It’s just not really for me. I don’t want to raise a kid in that. I just want a simple life,” Harris said.'
      ]
    },
    {
      newsTitle: "From Bombs to Shanties: The U's Legacy of Activism",
      newsAuthor: "By: Jordan Higgins",
      newsDate: "January 30, 2017",
      newsLink: "(As seen in print and " + "<a href='http://dailyutahchronicle.com/2017/01/30/bombs-shanties-us-legacy-activism/'>" + "online " + "</a>" + "at The Utah Daily Chronicle)",
      newsContent: [
        '<strong> 1953 </strong>',
        'The school’s constitution was being replaced with a new set of policies. Students, who felt the new constitution was “being pushed too fast, that it bowed to the administration, and that it was almost impossible to amend,” passed around petitions demanding that the U reject the document, according to a report by the Daily Utah Chronicle. Hundreds of students signed. Despite the appeal, the new constitution passed.',
        '<img src="http://dailyutahchronicle.com/wp-content/uploads/img_1635-335x251.jpg" alt="University of Utah Protest" align="left" class="responsive-img imageLeft">',
        'Activism has always played a part in campus life at the University of Utah. Students have repeatedly spoken out on local issues as well as matters affecting society on a national or global level. Some student movements have been forgotten, while others have changed the U and the surrounding community.',
        '<strong> 1964 </strong>',
        'An activist organization called Bookstore Improvement Through Campus Harassment (BITCH) were unhappy with the Campus Store’s low textbook availability and high prices, so they held picketing protests and performed unwanted music in the bookstore in attempt to “bury” it with music. A 1966 yearbook from the U cites BITCH’s demonstrations as the “direct cause for a larger stocking of both textbooks and paperbacks,” and “other revisions including a more efficient book exchange.”',
        '<strong> 1969 </strong>',
        'In the late 60s there were large-scale demonstrations against the Vietnam War on campuses across the country. The war started in 1955 and wouldn’t officially end for six more years. Students at the U were no exception. “In October 1969, several thousand students paraded from campus to the Federal Building in downtown Salt Lake City to protest the war.”',
        '<strong> 1970 </strong>',
        '<img src="http://dailyutahchronicle.com/wp-content/uploads/img_1633-e1485715664393.jpg" alt="University of Utah Protest" align="right" class="responsive-img imageRight"  style="height:33%; width:33%;">',
        'On April 30, President Richard Nixon announced that American troops were to invade Cambodia, which meant the US would draft 150,000 more soldiers. Students across the nation protested again in opposition to the war. On May 4, a protest at Kent State University took a violent turn when members of the National Guard shot and killed four students.',
        'Days later, 4,000 students from the U gathered for a demonstration just south of the Union Building in response to the deaths at Kent State. “Classes were disrupted, the Daily Utah Chronicle offices were occupied, and the ROTC building was fire-bombed.” Some students were arrested after being told to leave.',
        'Jerry Rubin, a leader of Students for a Democratic Society, later gave a speech in which he insisted that the hills and tress that currently reside south of the Union were placed there to impede protesters.',
        '<strong> 1986 </strong>',
        'Students at the U built a shanty village to protest apartheid and racial segregation in South Africa. On May 30, the Los Angeles Times reported, “Three shanties built on the University of Utah campus to protest the school’s investments in South Africa were torn apart early Thursday, but the students who made the structures pledged to rebuild them.”',
        'Since 1986, there have been many movements led by students on campus. Students have protested a wide range of things, from the removal of a jukebox to the Ute mascot, and more recently, campus rape culture and the agenda of President Donald Trump.'
      ]
    },
    {
      newsTitle: "From Mind to Marketplace: TVC Helps Students and Faculty Turn Inventions Into Businesses",
      newsAuthor: "By: Jordan Higgins",
      newsDate: "February 8, 2017",
      newsLink: "(As seen in print and " + "<a href=http://dailyutahchronicle.com/2017/02/08/mind-marketplace-tvc-helps-students-faculty-turn-inventions-businesses/'>" + "online " + "</a>" + "at The Daily Utah Chronicle)",
      newsContent: [
        'Technology and Venture Commercialization (TVC) has been providing inventors at the University of Utah with the tools and technology they need to turn their inventions into a successful business since 1970. To date, TVC has helped create over 230 companies by providing a milestone-driven process to commercialize technologies and inventions created by faculty and students at the U.',
        '“I like to think of TVC as the bridge between where ideas are created and where they make a difference,” said Jared Pieper, a student, part-time employee at TVC and inventor. “It seems so exciting to hear about the latest research and inventions from academia that will change lives, but in reality it’s not that easy. There is a lot of behind the scenes work to transform an invention into reality and that is the heart of what TVC does.”',
        'In 2016 alone, TVC launched seven new U spin-out companies.',
        'iCORDS, one of the companies launched last year, created a cloud-based interactive map that, according to its website, “delivers analytics-ready geoscience data and petroleum system insights harvested from global offshore scientific exploration and drilling activities.”',
        'Another company launched last year called ItRunsInMyFamily created a website (ItRunsInMyFamily.com ) which aims to use social networking and artificial intelligence to help families share heath histories with each other, improving family health history collection (FHx). Family health history is an important risk factor and indicator for cancer development. With the technology that the website offers, people with a high risk of cancer can work toward preventing and treating it sooner.',
        'Other companies launched in 2016 include Blacksand Tech, Farhang Wireless, Fluidx Medical Tech, Frameshift Labs and Polarized Antenna Innovations. All of these companies share the goal of global improvement with what they’ve invented at the U.',
        'This year, faculty and students are working to surpass the amount of technology brought to the market in 2016.',
        '“The invention that I have been working on with fellow MBA students over past year came from a clinical need that was observed by one of our professors, John Langell,” Pieper said. “Over 150,000 women die each year from postpartum hemorrhage, and an overwhelming majority (90+ percent) occur in developing countries where existing solutions are too expensive or not available. We are developing a medical device that offers a new approach that will be re-usable, cost effective, and easily adopted in these areas of the world.”',
        'TVC works in conjunction with the Lassonde Entrepreneur Institute, Center for Medical Innovation, Entrepreneurial Faculty Scholars and the Center for Engineering Innovation, and with the combined specialized expertise of all of these organizations, according to Pieper, “they have helped to create a commercialization enterprise at the U that simply could not have been established by TVC alone,” said Pieper.',
        'Both TVC and Lassonde Entrepreneur Institute host events and competitions with the intention of awarding students with the funds necessary to help their innovations find a market in the future.',
        'The Bench 2 Bedside program hosted by TVC is one such contest. It’s described on their website as an “exciting and vibrant program designed to introduce medical students, engineering students and business students to the fascinating world of medical device innovation.”',
        '“With the competition money we won from student competitions like Get Seeded and Bench 2 Bedside, we are now finalizing the design and starting to prepare manufactured units for clinical trials this year,” said Pieper, who, along with his team of entrepreneurs, is on the brink of successfully turning their invention into a marketable product and business. “We have partnered with Clinical Innovations, a local medical device company that specializes in global women’s health, to help us get the device approved by the FDA as well as to eventually market and distribute the product. We really hope that our device will have a large impact and save the lives of hundreds of thousands of mothers every year throughout the world.”',
        'TVC has also organized a board of experts called the Commercialization Engine Committee from different disciplines who are used as a resource for inventors looking for advice. In 2016, 900 professionals were added to the committee.',
        'Speaking about the Commercialization Engine Committee, James E. Thompson, the Interim Executive Director at TVC, said, “A few years ago, our office realized one of the most efficient ways to successfully manage this growth in multifarious discoveries was to create an evergreen network of external experts from as many fields of study as possible with whom we could rely upon to assist us in this exciting, yet diverse work.”',
        'Last year, TVC implemented the Lean Cohort program, which is for faculty who want to create real businesses based on their own inventions to create an impact in their given markets.',
        'One Lean Cohort cycle is launched each month and runs for seven weeks. A three-person team consisting of a Principal Investigator, Entrepreneurial Lead and a Business Mentor work together to achieve certain milestones that, if met, will lead to the successful commercialization of their inventions.',
        'According to TVC’s year-end report, this milestone-driven process gives participants three subsequent goals. “First, teams are to validate that the technology addresses an actual problem that real, potential customers are experiencing. Second, they are to validate that the technology solves that problem and that potential customers would purchase the product the team is developing. Third, they are to understand how large the market potential for their technology is.”',
        'An example shared in TVC’s year-end report is AvanSci Bio, a company that worked to create a device that would make testing tumors much easier, more successful and more cost efficient.',
        'According to the report, “The result was a tool called the MilliSect™ Instrument that was initially sold by the U-spinout. This technology, now owned by Roche Diagnostics, is able to extract tissue samples as small as 250 microns across (a human hair is about 75 microns across by comparison), far more precise than hand scraping samples produce. MilliSect is also automated, computer controlled, hands-free, and much less expensive than laser methods. It is saving pathologists time and, more importantly, resulting in less patient biopsies having to be redone.”',
        'Faculty or U students interested in being a part of TVC’s Lean Cohort program should contact their business and technology development representative.',
      ]
    },
    {
      newsTitle: "Students 'Take Back the Night' as Part of Sexual Assault Awareness Month",
      newsAuthor: "By: Jordan Higgins",
      newsDate: "April 6, 2017",
      newsLink: "(" + "<a href='http://dailyutahchronicle.com/2017/04/06/students-take-back-night-part-sexual-assault-awareness-month/'>" + "As seen on The Daily Utah Chronicle's Website" + "</a>" + ")",
      newsContent: [
        'With signs held high and voices raised, students from several college campuses in the Salt Lake area marched over two miles — from the University of Utah to Westminster College — to protest against Sexual Assault.',
        'The event, called “Take Back the Night,” took place Wednesday evening as part of the U’s “Sexual Assault Awareness Month.” The campaign coincides with national Sexual Assault Awareness and Prevention Month, proclaimed by President Donald Trump in March.',
        'Students for Choice, a campus organization dedicated to working toward equal reproductive rights, plans the annual event to raise awareness regarding women’s lack of safety in public spaces and to challenge society to change that.',
        '“I’ve experienced walking around campus and not feeling comfortable,” said Jayden Howard, a student at the U. “That’s not right, this is my campus too.”',
        'Speaking to some of the alleged improvements being made to assure student safety on campus, Howard added, “I think [the U] has good intentions, but I haven’t really seen anything. They tried the ‘Get Campus Lit’ campaign earlier this year, and I don’t notice any more lights.”',
        'Students participating in the demonstration weren’t only concerned about safety on campus, but were also hoping to change society’s perception of sexual assault.',
        '“I want to make people aware that this is still an issue,” explained Sandra Sato, another student at the U. “A lot of people think, ‘Oh that doesn’t happen anymore, it’s not that common,’ but it really is. And people need to be aware that sexual assault is an issue and it’s not the victim’s fault.”',
        'Many men attended the march to stand in solidarity with women.',
        '“I totally believe in feminism and equal equality,” said Tyler Lindeman, one of the men participating. “I’ve had a few close friends that have been in this situation and I want to speak out about it in my own little way.”',
        'One individual, who identified themselves as a victim of sexual assault, brought their emotional support dog along.',
        '“I was sexually assaulted first semester,” said Meredith Morello. “I think our school is really good about [addressing] it, but I do think that society really puts a lot of pressure for recovery and there is still a lot of victim blaming, which is why I am marching.”'

      ]
    }
  ];

  var storyNumber = 10;

  $("#story0, #story-zero").on("click", function () {
    storyNumber = 0;
    console.log(storyNumber);
    filterStory();
    $("#story0").hide();
    $("#story1").show();
    $("#story2").show();
    $("#story3").show();
  });
  $("#story1, #story-one").on("click", function () {
    storyNumber = 1;
    console.log(storyNumber);
    filterStory();
    $("#story0").show();
    $("#story1").hide();
    $("#story2").show();
    $("#story3").show();
  });
  $("#story2, #story-two").on("click", function () {
    storyNumber = 2;
    console.log(storyNumber);
    filterStory();
    $("#story0").show();
    $("#story1").show();
    $("#story2").hide();
    $("#story3").show();
  });
  $("#story3, #story-three").on("click", function () {
    storyNumber = 3;
    console.log(storyNumber);
    filterStory();
    $("#story0").show();
    $("#story1").show();
    $("#story2").show();
    $("#story3").hide();
  });

  function filterStory() {
    switch (storyNumber) {
      case 0:
        loadStory();
        //console.log("Story updated.")
        break;
      case 1:
        loadStory();
        //console.log("Story updated.")
        break;
      case 2:
        loadStory();
        //console.log("Story updated.")
        break;
      case 3:
        loadStory();
        //console.log("Story updated.")
        break;

      default:
        console.log("Houston, We have a problem.")
    }

  }



  //loads a news story and plugs in corresponding story info.
  function loadStory() {
    window.location = 'https://jhiggi44.github.io/news.html#beginStory';
    $("#newsArea").empty();
    $("#newsArea").addClass("news-section");

    var p = [];

    $("#newsTitle").html(newsArticles[storyNumber].newsTitle);
    $("#newsAuthor").html(newsArticles[storyNumber].newsAuthor);
    $("#newsDate").html(newsArticles[storyNumber].newsDate);
    $("#newsLink").html(newsArticles[storyNumber].newsLink);

    for (var i = 0; i < newsArticles[storyNumber].newsContent.length; i++) {

      p[i] = $("<p>");

      p[i].html(newsArticles[storyNumber].newsContent[i]);

      $("#newsArea").append(p[i]);


    }
  };



  // Academic page Javascript
  $(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });



  //Contace me form
  var emailInvite = {
    to_email: "jordandhiggins@gmail.com",
    reply_name: "",
    from_name: "",
    to_name: "Jordan Higgins",
    taco_movie: ""
  };

  $("#sendEmail").on("click", function () {
    event.preventDefault();

    emailInvite.reply_to = $("#reply_to").val();
    emailInvite.from_name = $("#from_name").val();
    emailInvite.taco_movie = $("#taco_movie").val();

    emailjs.send("tacos8movies", "taco_email", emailInvite)
      .then(function (response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        
        Materialize.toast('Message sent!', 4000);

      }, function (err) {
        console.log("FAILED. error=", err);
        Materialize.toast('There was an error. Please try again or email Jordan personally at jordandhiggins@gmail.com', 4000);

      });
  });

  //end .document 
});