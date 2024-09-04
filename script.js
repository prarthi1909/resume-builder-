// JavaScript logic for dynamically adding experience and education fields

function addExperience() {
    const experienceFields = document.getElementById("experienceFields");
    const newExperienceField = document.createElement("div");
    newExperienceField.innerHTML = `
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle[]" required>
        
        <label for="company">Company:</label>
        <input type="text" name="company[]" required>
        
        <label for="experienceDuration">Duration:</label>
        <input type="text" name="experienceDuration[]" required>
        <br>
    `;
    experienceFields.appendChild(newExperienceField);
}

function addEducation() {
    const educationFields = document.getElementById("educationFields");
    const newEducationField = document.createElement("div");
    newEducationField.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" name="degree[]" required>
        
        <label for="university">University:</label>
        <input type="text" name="university[]" required>
        
        <label for="graduationYear">Graduation Year:</label>
        <input type="text" name="graduationYear[]" required>
        <br>
    `;
    educationFields.appendChild(newEducationField);
}

// You can add more fields and customization based on your requirements
// Additionally, implement the logic to handle form submission and generate the resume output.