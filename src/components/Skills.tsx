const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: ["Python", "C++", "Java", "Kotlin","Dart","Javascript", "Typescript"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "PostgresQL", "RoomDB"],
    },
    {
      title: "Frameworks",
      items: [ "Flutter","NodeJS", "ExpressJS", "ReactJS"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">What I bring to the table</p>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-lg flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
