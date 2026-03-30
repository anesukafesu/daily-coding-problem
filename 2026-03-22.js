/*
Create a list of friend groups

While there's someone in the network: 
  Get that person as p.
  Call resolve friend group of p.
  Add that group to the list of friend groups.

Return all the friend groups.
  
Resolve friend group of p:
  Create p's friend group.
  Add p to that friend group.
  Take note of p's friends.
  Remove p from the original network.
  For each of p's friends as f:
    If the friend still has an entry in the network:
      Call resolve friend group of f to get f's friend group.
      Merge f's friend group with the p's friend group.
  Return p's friend group
*/

function createFriendGroups(network) {
  const friendGroups = [];

  while (Object.keys(network).length > 0) {
    const person = Object.keys(network)[0];
    const personsFriendGroup = resolveFriendGroupForPerson(person);
    friendGroups.push(personsFriendGroup);
  }

  return friendGroups;
}

function resolveFriendGroupForPerson(network, person) {
  const friendGroup = [person];
  const personsFriends = network[person];
  delete network[person];

  for (const friend of personsFriends) {
    if (network[friend] !== undefined) {
      const friendsFriendGroup = resolveFriendGroupForPerson(network, friend);
      friendGroup.push(...friendsFriendGroup);
    }
  }

  return friendGroup;
}
