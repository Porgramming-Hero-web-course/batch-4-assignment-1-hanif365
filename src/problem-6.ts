{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type ProfileUpdates = Partial<Profile>;

  type UpdateProfile = (profile: Profile, updates: ProfileUpdates) => Profile;

  const updateProfile: UpdateProfile = (profile, updates) => {
    return { ...profile, ...updates };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(updateProfile(myProfile, { age: 26 }));
}
