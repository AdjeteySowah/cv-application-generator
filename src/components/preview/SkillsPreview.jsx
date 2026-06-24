function parseSkillTags(value) {
  return value
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);
}

export default function SkillsPreview({ skills }) {
  const hardSkillTags = [...parseSkillTags(skills.hard)];
  const softSkillTags = [...parseSkillTags(skills.soft)];

  if (hardSkillTags.length === 0 && softSkillTags.length === 0) {
    return null;
  }

  return (
    <>
      <ul className="resume-skills" aria-label="Hard skills">
        {hardSkillTags.map((skill, index) => (
          <li key={`${skill}-${index}`}>{skill}</li>
        ))}
      </ul>
      <ul className="resume-skills" aria-label="Soft skills">
        {softSkillTags.map((skill, index) => (
          <li key={`${skill}-${index}`}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
