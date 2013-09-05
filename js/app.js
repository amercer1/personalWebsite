App = Ember.Application.create();

App.Router.map(function(){
  this.resource('posts');
});

App.PostsRoute = Ember.Route.extend({
  model: function(){
    return posts;
  }
});

var posts = [{
  id: '1',
  title: "Adding Ember To My Website",
  author: { name: "amercer1" },
  date: new Date('09-05-2013'),
  body: "Wanting to be ahead of the curve for once, I decided I wanted to learn ember.js. I figured I would make my webpage a one page application. So far I am happy with the results. The learning curve is a bit steep and I find myself scratching my head from time to time. But overall, I think I am getting thang of this. For those of you who are interested, Tom Dale's video tutorial is worth the time. As of this posting, you can find it <a href='http://emberjs.com/guides/'>here.</a> I look forward to what I will be able to create."
}];
