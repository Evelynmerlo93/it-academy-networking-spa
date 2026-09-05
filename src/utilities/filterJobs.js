export function filterJobs(jobs, { query = "", stack = "", location = "" }) { // espero recibir un objeto con estas tres propiedades, y si alguna no me la das, usa un texto vacío "" por defecto
  const normalizedQuery = query.trim().toLowerCase();

  return jobs.filter((job) => {
    const matchesQuery =
      job.title.toLowerCase().includes(normalizedQuery) ||
      job.company.toLowerCase().includes(normalizedQuery);

    const matchesStack = stack === "" || job.stack.includes(stack);
    const matchesLocation = location === "" || job.location === location;

    return matchesQuery && matchesStack && matchesLocation;
  });
}