new Vue({
    el: '#photos',
    data:{
        source: "/images/chili.jpg"
    }
});

Vue.component('mycomponent1', {
            template: '<span>Food Blog</span>'
        });

        Vue.component('mycomponent2', {
            template: '<h2>Comments</h2>'
        })

        var vm1 = new Vue({
            el: '#component1'
        });
        var vm2 = new Vue({
            el: '#component2'
        });

        new Vue({
            el: '#blogposts',
            data: {
                comments: [
                    {
                        profile: 'profile.png',
                        name: 'Brianna',
                        time: 'February 18, 2021 @ 3:30 pm',
                        action: 'REPLY',
                        comment: '<p>Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!</p>',
                        FoodieLevel: 'Novice',
                        Bio: 'Food enthusiast. Love to cook and experiment.Into only organic, fat free, sugar free stuffs!',
                        show: true,
                    }, {
                        profile: 'profile.png',
                        name: 'LINH',
                        time: 'February 15, 2021 @ 9:46 am',
                        action: 'REPLY',
                        comment: '<p>I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!</p>',
                        FoodieLevel: 'Newcomer',
                        Bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
                        show: true,
                    }, {
                        profile: 'profile.png',
                        name: 'CATHERINE LEONARDO',
                        time: 'February 13, 2021 @ 12:58 pm',
                        action: 'REPLY',
                        comment: '<p>I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.</p>',
                        FoodieLevel: 'Mentor',
                        Bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
                        show: true,
                    }, {
                        profile: 'profile.png',
                        name: 'KALI',
                        time: 'February 13, 2021 @ 11:31 am',
                        action: 'REPLY',
                        comment: '<p>This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!</p>',
                        FoodieLevel: 'Novice',
                        Bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
                        show: true,
                    }]
            },
            methods: {
                showProfile: function (i) {
                    console.log(this.comments[i].comment);
                    var name = this.comments[i].name;
                    var level = this.comments[i].FoodieLevel;
                    var bio = this.comments[i].Bio;
                    modalOn(name, level, bio);
                }
            },
        });

        function modalOn(name, level, bio) {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("text").innerHTML = "<h4>" + name + "</h4>" + "<p><b>Foodie Level: </b>" + level + "</p>" + "<p><b>Bio: </b>" + bio + "</p>";
        };

        function modalOff() {
            document.getElementById("overlay").style.display = "none";
        };

 
    /* nav bar */
    var app = new Vue({
        el: '#nav',
        data: {
              nav: [
          {
              id: 1,
              title: "Home",
          },
          {
              id: 2,
                  title: "Reciepies",
          },
          {
              id: 3,
              title: "Lifestyles",
          },
          {
            id: 4,
            title: "Videos",
        },
        {
            id: 5,
            title: "About",
        }
      ]
        }
      })      