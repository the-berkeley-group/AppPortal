def make_questions
  Rake::Task["questions:generate"].invoke
end

def make_applicants
  1.upto(5) do |n|
    Applicant.create(
      email: "app#{n}@tbg.com",
      password: "password",
      password_confirmation: "password",
      first_name: FFaker::Name.first_name,
      last_name: FFaker::Name.last_name,
      year: "Sophomore",
      major: "EECS",
      gpa: 4.0,
      units: 15,
      phone: FFaker::PhoneNumber.short_phone_number
    )
  end
end

def make_admins
  %w(pres ivp vpd pvp evp pl1 pl2 pl3 pl4 pl5 gm1 gm2 gm3 gm4 gm5 gm6 gm7 gm8 gm9 gm10 gm11 gm12 gm13 gm14 gm15).each.with_index do |name, index|
    Admin.create(
      email: "#{name}@tbg.com",
      name: name,
      decision: index,
      password: "password",
      password_confirmation: "password"
    )
  end
end

def make_emails
  0.upto(2) do |n|
    Email.create(stage: n)
  end
end

def make_settings
  Settings.instance.update(deadline: DateTime.now.advance(months: 2))
end

make_questions
make_applicants
make_admins
make_emails
make_settings
