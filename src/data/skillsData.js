import React from 'react';
import {
    SiC, SiFlask, SiMysql, SiSpringboot, SiOracle
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaAngular } from 'react-icons/fa';

export const technicalSkills = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'C', color: '#A8B9CC' },
    { name: 'Flask', color: '#000000' },
    { name: 'SQL', color: '#4479A1' },
    { name: 'Java', color: '#007396' },
    { name: 'Springboot', color: '#6DB33F' },
    { name: 'Angular', color: '#DD0031' },
    { name: 'Oracle SQL Dev', color: '#F80000' }
];

export const technologies = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 size={60} />, color: '#E34F26', category: 'frontend' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt size={60} />, color: '#1572B6', category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: <FaJs size={60} />, color: '#F7DF1E', category: 'frontend' },
    { id: 4, name: 'React', icon: <FaReact size={60} />, color: '#61DAFB', category: 'frontend' },
    { id: 5, name: 'Python', icon: <FaPython size={60} />, color: '#3776AB', category: 'backend' },
    { id: 6, name: 'C', icon: <SiC size={60} />, color: '#A8B9CC', category: 'backend' },
    { id: 7, name: 'Flask', icon: <SiFlask size={60} />, color: '#000000', category: 'backend' },
    { id: 8, name: 'SQL', icon: <SiMysql size={60} />, color: '#4479A1', category: 'database' },
    { id: 9, name: 'Java', icon: <FaJava size={60} />, color: '#007396', category: 'backend' },
    { id: 10, name: 'Springboot', icon: <SiSpringboot size={60} />, color: '#6DB33F', category: 'backend' },
    { id: 11, name: 'Angular', icon: <FaAngular size={60} />, color: '#DD0031', category: 'frontend' },
    { id: 12, name: 'Oracle SQL Dev', icon: <SiOracle size={60} />, color: '#F80000', category: 'database' }
];

export const techCategories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' }
];

export const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Critical Thinking',
    'Continuous Learning'
];
