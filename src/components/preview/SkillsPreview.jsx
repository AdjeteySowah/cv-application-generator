function parseSkillTags(value) {
  return value
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);
}

export default function SkillsPreview({ skills }) {
  const tags = [...parseSkillTags(skills.hard), ...parseSkillTags(skills.soft)];

  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="resume-skills" aria-label="Skills">
      {tags.map((skill, index) => (
        <li key={`${skill}-${index}`}>{skill}</li>
      ))}
    </ul>
  );
}
