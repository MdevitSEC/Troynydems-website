# Holiday Posts

Facebook posts for holidays and civic dates. Each post has a 1080x1080 graphic in `graphics/` and copy below.

**Style:** keep it short and warm. No em dashes. Nonpartisan in tone. Sign off as the City of Troy Democratic Committee.

**To make or change a graphic:** edit `posts.json`, then run:

```
python holiday-posts/render.py              # all graphics
python holiday-posts/render.py flag-day     # just one
```

Each entry in `posts.json` takes these fields: `kicker` (the gold line at the top), `headline`, `sub`, `size` (headline px: use 140 for short headlines and 120 for long ones), `flag` (true adds the stripes and stars), and `icon` (an emoji drawn in the bottom-right corner as a nod to the holiday, e.g. 🦃 for Thanksgiving; it can also be inline SVG markup, as with the fireworks on Independence Day). Each post also sets its holiday's colors with `bg` (background), `ink` (main text), `accent` (kicker, stars, and URL), and `bar` (the top bar, which can be a CSS gradient such as the Pride rainbow). Leave them out to get committee navy and gold. Add `"striped": true` to turn a multi-color `bar` into full-bleed stripes behind a rounded panel in the `bg` color A `pattern` (any CSS background) replaces those stripes, as with the gift-wrap stripes on Happy Holidays. Striped posts: Happy Holidays, Black History Month, Women's History Month, Pride, Juneteenth, and Hispanic Heritage Month). Keep the accent bright enough to read on the background. Check every PNG after you render it.

**When a post's date passes:** keep the old entry as a record, then add the same holiday for the next year at the end of the list. Write fresh copy (don't repeat last year's wording) and give the graphic a new look with a different headline, colors, and icon. Use the new year's date and weekday in the id, file name, and heading. Then render it and rebuild the Holiday Posts page.

**Alt text pattern:** *Graphic reading "[kicker]. [headline]. [sub]." Troy Democratic Committee logo and troynydems.com.*

---

## 2026

### Veterans Day · Wed., Nov. 11
Graphic: `2026-11-11-veterans-day.png`

> Happy Veterans Day, Troy.
>
> Today we thank every veteran in our city and across the country for their service. You stepped up to protect the freedoms we all share, including the right to vote and to have a say in our community.
>
> We also thank the families who served alongside them, and the neighbors who show up for veterans all year long.
>
> If you know a veteran, give them a call or stop by today to say thank you.
>
> With gratitude,
> City of Troy Democratic Committee
>
> 🇺🇸 #VeteransDay #TroyNY

### Thanksgiving · Thu., Nov. 26
Graphic: `2026-11-26-thanksgiving.png`

> Happy Thanksgiving, Troy!
>
> We are grateful for our neighbors and everyone who works to make this city a better place. We wish you and your family a warm and happy holiday.
>
> Today we are also thinking of the people working through the holiday, from nurses and first responders to the folks keeping our stores and restaurants open. Thank you.
>
> If you're able, consider giving to a local food pantry this season so more Troy families have a full table.
>
> City of Troy Democratic Committee
>
> #Thanksgiving #TroyNY

### Small Business Saturday · Sat., Nov. 28
Graphic: `2026-11-28-small-business-saturday.png`

> It's Small Business Saturday!
>
> Troy's local shops and restaurants give our city its character. Today, start your holiday shopping close to home.
>
> When you shop local, you support the people who live and work in our neighborhoods and help keep our downtown and main streets busy.
>
> Tell us in the comments: where's your favorite place to shop in Troy?
>
> City of Troy Democratic Committee
>
> #ShopSmall #ShopLocal #TroyNY

### Happy Holidays · Thu., Dec. 24
Graphic: `2026-12-24-happy-holidays.png`

> Happy Holidays, Troy!
>
> However you celebrate, we wish you and your loved ones a season of peace and joy.
>
> Thank you to everyone who spent time this year helping a neighbor or volunteering here in Troy.
>
> City of Troy Democratic Committee
>
> #HappyHolidays #TroyNY

## 2027

### New Year's Day · Fri., Jan. 1
Graphic: `2027-01-01-new-year.png`

> Happy New Year, Troy!
>
> Thank you for being part of this community. Here's to a happy and healthy 2027.
>
> This year, we hope you'll come to a City Council meeting. It's where decisions about your taxes and your street get made, and residents can speak to the council there.
>
> City of Troy Democratic Committee
>
> #HappyNewYear #TroyNY

### Martin Luther King Jr. Day · Mon., Jan. 18
Graphic: `2027-01-18-mlk-day.png`

> Today we honor Dr. Martin Luther King Jr.
>
> He fought for equal rights and the right to vote. His work goes on in every community that stands up for fairness, including ours.
>
> Many people mark MLK Day as a day of service. If you can, spend part of today volunteering or helping a neighbor.
>
> City of Troy Democratic Committee
>
> #MLKDay #TroyNY

### Black History Month · Mon., Feb. 1
Graphic: `2027-02-01-black-history-month.png`

> February is Black History Month.
>
> This month we celebrate the history and leadership of Black Americans, and the Black neighbors who help make Troy what it is today.
>
> This month, we encourage you to visit a Black-owned business in Troy and learn a piece of local history you haven't heard before.
>
> City of Troy Democratic Committee
>
> #BlackHistoryMonth #TroyNY

### Women's History Month · Mon., Mar. 1
Graphic: `2027-03-01-womens-history-month.png`

> March is Women's History Month.
>
> We honor the women who have led and organized in Troy and across the country, and the women leading our community today.
>
> Troy has its own place in this history. In 1864, Kate Mullany organized the Collar Laundry Union here, one of the first all-women labor unions in the country. Her home is now a National Historic Site.
>
> Is there a woman in Troy who inspires you? Tell us about her in the comments.
>
> City of Troy Democratic Committee
>
> #WomensHistoryMonth #TroyNY

### Memorial Day · Mon., May 31
Graphic: `2027-05-31-memorial-day.png`

> This Memorial Day, we remember the men and women who gave their lives in service to our country.
>
> We hold their families in our hearts today and every day.
>
> At 3 p.m. local time, Americans are asked to pause for a National Moment of Remembrance. Wherever you are today, we hope you'll take that moment with us.
>
> City of Troy Democratic Committee
>
> 🇺🇸 #MemorialDay #TroyNY

### Pride Month · Tue., June 1
Graphic: `2027-06-01-pride-month.png`

> Happy Pride, Troy! 🏳️‍🌈
>
> This month we celebrate our LGBTQ+ neighbors and friends. Troy is a city for everyone.
>
> Everyone deserves to feel safe and welcome in Troy, in June and all year.
>
> City of Troy Democratic Committee
>
> #Pride #TroyNY

### Flag Day · Mon., June 14
Graphic: `2027-06-14-flag-day.png`

> Happy Flag Day, Troy! 🇺🇸
>
> On June 14, 1777, the Continental Congress adopted the Stars and Stripes as our national flag.
>
> For years, Troy celebrated Flag Day with a parade through our streets. Today we remember that proud tradition and the neighbors who made it happen.
>
> Share your favorite Flag Day parade memory in the comments!
>
> City of Troy Democratic Committee
>
> #FlagDay #TroyNY

### Juneteenth · Sat., June 19
Graphic: `2027-06-19-juneteenth.png`

> Happy Juneteenth!
>
> On June 19, 1865, enslaved people in Galveston, Texas, learned they were free. Today we celebrate freedom and recommit to the work of making it real for everyone.
>
> Juneteenth became a federal holiday in 2021. Many families mark the day with cookouts and get-togethers.
>
> City of Troy Democratic Committee
>
> #Juneteenth #TroyNY

### Independence Day · Sun., July 4
Graphic: `2027-07-04-independence-day.png`

> Happy Fourth of July, Troy! 🇺🇸
>
> 251 years ago, the Declaration of Independence said that governments get their power from the consent of the governed. Every time we vote and speak up, we keep that promise going.
>
> Enjoy the day with family and friends, and please celebrate safely. Be mindful of veterans and pets who may be sensitive to fireworks.
>
> City of Troy Democratic Committee
>
> #FourthOfJuly #TroyNY

### Labor Day · Mon., Sept. 6
Graphic: `2027-09-06-labor-day.png`

> Happy Labor Day!
>
> Working people built Troy. Today we thank the workers and unions who keep our city running and who fought for fair pay and safe jobs.
>
> Troy's working history runs from the iron and collar workers of the 1800s to the nurses and city workers who serve us today. Enjoy the long weekend!
>
> City of Troy Democratic Committee
>
> #LaborDay #TroyNY

### Uncle Sam Day · Mon., Sept. 13
Graphic: `2027-09-13-uncle-sam-day.png`

> Happy Birthday, Uncle Sam! 🇺🇸
>
> Troy meatpacker Samuel Wilson was born on Sept. 13, 1766. His "U.S." stamped barrels helped give our country the name Uncle Sam. That makes Troy the Home of Uncle Sam.
>
> In 1961, Congress officially recognized Sam Wilson as the namesake of Uncle Sam. He is buried right here in Troy's Oakwood Cemetery.
>
> City of Troy Democratic Committee
>
> #UncleSamDay #TroyNY

### Hispanic Heritage Month · Wed., Sept. 15
Graphic: `2027-09-15-hispanic-heritage-month.png`

> Hispanic Heritage Month starts today!
>
> From Sept. 15 to Oct. 15, we celebrate the history and culture of our Hispanic and Latino neighbors.
>
> The month starts on Sept. 15 because it's Independence Day for Costa Rica, El Salvador, Guatemala, Honduras, and Nicaragua. Mexico celebrates on Sept. 16 and Chile on Sept. 18.
>
> ¡Feliz Mes de la Herencia Hispana!
>
> City of Troy Democratic Committee
>
> #HispanicHeritageMonth #TroyNY

### Election Day · Tue., Nov. 2
Graphic: `2027-11-02-election-day.png`

> It's Election Day, Troy!
>
> Polls are open from 6 a.m. to 9 p.m. Not sure where to vote? Find your polling place at troynydems.com/vote.html.
>
> Local elections decide who runs City Hall and who votes on the city budget. If a neighbor needs a ride to the polls, offer one.
>
> City of Troy Democratic Committee
>
> #ElectionDay #TroyNY

### Veterans Day · Thu., Nov. 11
Graphic: `2027-11-11-veterans-day.png`

> Happy Veterans Day, Troy.
>
> Today we honor the men and women from our city and across the country who served in the armed forces. Thank you for your service, and thank you to the families who stood behind you.
>
> Many veterans keep serving long after they come home, coaching kids' teams and volunteering right here in Troy.
>
> Take a minute today to thank a veteran in your life. A phone call or a short note means more than you might think.
>
> With gratitude,
> City of Troy Democratic Committee
>
> 🇺🇸 #VeteransDay #TroyNY
