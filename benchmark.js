import { performance } from 'perf_hooks';

// Simulate a large prompt (e.g. 1000 lines of text inside one of the fields)
const generateLargePrompt = (numFieldsFilled, linesPerField) => {
  let prompt = '';
  const fields = ['role', 'context', 'goals', 'thinking', 'instructions'];

  for (let i = 0; i < numFieldsFilled; i++) {
    const field = fields[i];
    prompt += `<${field}>\n`;
    for (let j = 0; j < linesPerField; j++) {
      prompt += `This is a line of text ${j} inside the field ${field}. It has some content here.\n`;
    }
    prompt += `</${field}>\n\n`;
  }
  return prompt;
};

const largePrompt = generateLargePrompt(5, 1000); // 5000 lines

// Approach 1: Original
const testOriginal = () => {
  const start = performance.now();
  for (let i = 0; i < 100; i++) {
    const tagCount = largePrompt.split('\n').filter(line => line.includes('<')).length;
    Math.min(5, Math.floor(tagCount / 2));
  }
  return performance.now() - start;
};

// Approach 2: Regex
const testRegex = () => {
  const start = performance.now();
  for (let i = 0; i < 100; i++) {
    const tagCount = (largePrompt.match(/</g) || []).length;
    Math.min(5, Math.floor(tagCount / 2));
  }
  return performance.now() - start;
};

// Approach 3: Field Count (Direct)
// For this we simulate just counting the fields, which is O(1) regarding string length
const testFieldCount = () => {
  const start = performance.now();
  const formData = {
    role: 'a', context: 'b', goals: 'c', thinking: 'd', instructions: 'e',
    tech_stack: '', constraints: '', references: '', style: '', output_format: '', deliverables: '', specialization: ''
  };
  const fieldsToCheck = [
    'role', 'context', 'goals', 'tech_stack', 'constraints',
    'thinking', 'instructions', 'references', 'style',
    'output_format', 'deliverables', 'specialization'
  ];

  for (let i = 0; i < 100; i++) {
    let filledFields = 0;
    for (const field of fieldsToCheck) {
      if (formData[field] && formData[field].trim()) {
        filledFields++;
      }
    }
    Math.min(5, filledFields);
  }
  return performance.now() - start;
};

console.log(`Original: ${testOriginal().toFixed(2)} ms`);
console.log(`Regex: ${testRegex().toFixed(2)} ms`);
console.log(`Field Count: ${testFieldCount().toFixed(2)} ms`);
