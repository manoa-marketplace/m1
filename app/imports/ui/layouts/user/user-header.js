import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
// import { ReactiveDict } from 'meteor/reactive-dict';

Template.User_Header.helpers({
  routeUserName() {
    return FlowRouter.getParam('username');
  },
});

Template.User_Header.events({
  'submit .search-form'(event, instance) {
    event.preventDefault();
    const query = event.target.Search.value;
    instance.find('form').reset();
    if (query.trim() !== '') {
      FlowRouter.go(`/${FlowRouter.getParam('username')}/search/${query.trim()}`);
    }
  },
});
