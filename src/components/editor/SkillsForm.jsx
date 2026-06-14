import TextInput from '../ui/TextInput.jsx';

export default function SkillsForm({ onSkillsChange, skills }) {
  return (
    <form
      className="editor-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <TextInput
        hint="comma-separated"
        id="hard-skills"
        label="Hard Skills"
        onChange={(event) => onSkillsChange('hard', event.target.value)}
        placeholder="E.g. HTML, CSS, JavaScript, React, Git & GitHub"
        value={skills.hard}
      />
      <TextInput
        hint="(optional)"
        id="soft-skills"
        label="Soft Skills"
        onChange={(event) => onSkillsChange('soft', event.target.value)}
        placeholder="E.g. Teamwork, Communication, Problem Solving, Punctuality"
        value={skills.soft}
      />
    </form>
  );
}
