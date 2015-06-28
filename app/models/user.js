import DS from 'ember-data';

var User = DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  addressLine: DS.attr(),
  postCode: DS.attr(),
  country: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'James',
      lastName: 'Rice',
      addressLine: '66 Belvue Road',
      postCode: 'M235PS',
      country: 'United Kingdom'
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Sanneh',
      addressLine: '66 Belvue Road',
      postCode: 'M235PS',
      country: 'United Kingdom'
    },
    {
      id: 3,
      firstName: 'Cecil',
      lastName: 'Qian',
      addressLine: '66 Belvue Road',
      postCode: 'M235PS',
      country: 'United Kingdom'
    }
  ]
});

export default User; 