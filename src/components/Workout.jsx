import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

export default function Workout({ workout }) {
  return (
    <SectionWrapper id="workout" header="Welcome to" title={['The', 'DANGER', 'Zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => (
          <ExerciseCard key={i} i={i} exercise={exercise} />
        ))}
      </div>
    </SectionWrapper>
  );
}
