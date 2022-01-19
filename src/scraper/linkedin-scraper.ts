import { LinkedinScraper, typeFilter } from 'linkedin-jobs-scraper';

const scrape = async () => {
    const scraperProcess = new LinkedinScraper({
        headless: true,
        slowMo: 100,
        args: ['--lang=en-GB'],
    });
    await Promise.all([
        // Run queries serially
        scraperProcess.run(
            [
                {
                    query: 'Engineer',
                    options: {
                        locations: ['United States'], // This will override global options ["Europe"]
                        filters: {
                            type: [typeFilter.FULL_TIME, typeFilter.CONTRACT],
                        },
                    },
                },
                {
                    query: 'Sales',
                    options: {
                        limit: 10, // This will override global option limit (33)
                    },
                },
            ],
            {
                // Global options, will be merged individually with each query options
                locations: ['Europe'],
                optimize: true,
                limit: 33,
            },
        ),
    ]);

    await scraperProcess.close();
};
