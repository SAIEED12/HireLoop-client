const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const getCompanyJobs = async (companyId, status = 'active') => {
  try {
    const res = await fetch(`${baseURL}/api/jobs?companyId=${companyId}&status=${status}`, {
      cache: 'no-store' // Keeps data fresh on server-side renders
    })

    // 1. Check if the response status is NOT 200-299 (e.g., handles 404, 500 HTML errors)
    if (!res.ok) {
      console.error(`getCompanyJobs failed with status: ${res.status}`)
      return [] // Safe fallback so your component doesn't break
    }

    // 2. Safely parse JSON if response is healthy
    return await res.json()
    
  } catch (error) {
    // 3. Catches network failures, DNS issues, or parsing crashes
    console.error("Network or parsing error in getCompanyJobs:", error)
    return [] // Safe fallback
  }
}