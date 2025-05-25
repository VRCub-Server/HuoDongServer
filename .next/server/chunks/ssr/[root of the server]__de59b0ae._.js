module.exports = {

"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkInUser": (()=>checkInUser),
    "createEvent": (()=>createEvent),
    "createUser": (()=>createUser),
    "deleteEventById": (()=>deleteEventById),
    "getAnnouncements": (()=>getAnnouncements),
    "getEventByCdKey": (()=>getEventByCdKey),
    "getEventById": (()=>getEventById),
    "getEvents": (()=>getEvents),
    "getUserById": (()=>getUserById),
    "getUserByUsername": (()=>getUserByUsername),
    "joinEvent": (()=>joinEvent),
    "leaveEvent": (()=>leaveEvent),
    "updateEventById": (()=>updateEventById)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const USERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'users.json');
const EVENTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'events.json');
const ABOUT_USER_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'about-user.json');
const defaultUsers = [
    {
        id: 'Steve',
        username: 'Steve',
        avatarUrl: `https://placehold.co/100x100.png?text=St`,
        joinedEventIds: [
            'event1',
            'event2'
        ],
        op: 0,
        password: '123456'
    },
    {
        id: 'Alex',
        username: 'Alex',
        avatarUrl: `https://placehold.co/100x100.png?text=Al`,
        joinedEventIds: [
            'event2'
        ],
        op: 0,
        password: '123456'
    },
    {
        id: 'Notch',
        username: 'Notch',
        avatarUrl: `https://placehold.co/100x100.png?text=No`,
        joinedEventIds: [],
        op: 1,
        password: '123456'
    },
    {
        id: 'dream_pep_id',
        username: 'dream_pep',
        avatarUrl: `https://placehold.co/100x100.png?text=dr`,
        joinedEventIds: [
            'event1',
            'event3'
        ],
        op: 1,
        password: '123456'
    }
];
const defaultEvents = [
    {
        id: 'event1',
        name: '生存游戏锦标赛',
        date: '2024-07-29T12:00:00.000Z',
        description: "\n### 欢迎参加年度生存游戏！\n证明你的勇气，成为最后的幸存者。\n**规则：**\n- 禁止作弊\n- 联盟是暂时的\n- 玩得开心！\n**奖品：**\n- 第一名：钻石奖杯\n- 第二名：金锭\n- 第三名：铁制工具\n",
        participantLimit: 24,
        participants: [
            {
                id: 'Steve',
                username: 'Steve',
                avatarUrl: `https://placehold.co/100x100.png?text=St`,
                isCheckedIn: false,
                op: 0,
                password: '123456'
            },
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: `https://placehold.co/100x100.png?text=dr`,
                isCheckedIn: false,
                op: 1,
                password: '123456'
            }
        ],
        cdKey: 'SURVIVAL2024',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event2',
        name: '创意建筑大赛',
        date: '2024-07-22T12:00:00.000Z',
        description: "\n## 展示你的建筑技巧！\n主题：**中世纪城堡**\n在时限内建造最令人印象深刻的城堡。\n评分标准：\n- 创意\n- 细节\n- 规模\n",
        participantLimit: 50,
        participants: [
            {
                id: 'Steve',
                username: 'Steve',
                avatarUrl: `https://placehold.co/100x100.png?text=St`,
                isCheckedIn: true,
                op: 0,
                password: '123456'
            },
            {
                id: 'Alex',
                username: 'Alex',
                avatarUrl: `https://placehold.co/100x100.png?text=Al`,
                isCheckedIn: false,
                op: 0,
                password: '123456'
            }
        ],
        cdKey: 'BUILDMC2024',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event3',
        name: '跑酷挑战赛',
        date: '2024-07-08T12:00:00.000Z',
        description: '在我们迄今为止最难的跑酷地图中测试你的敏捷性。完成即可获得奖励！',
        participants: [
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: `https://placehold.co/100x100.png?text=dr`,
                isCheckedIn: true,
                op: 1,
                password: '123456'
            }
        ],
        cdKey: 'PARKOURX',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event4',
        name: '红石装置展览会',
        date: '2024-08-21T12:00:00.000Z',
        description: '展示你最巧妙的红石发明。创新是关键！',
        participantLimit: 10,
        participants: [],
        cdKey: 'REDSTONEFAI',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    }
];
const defaultAnnouncements = [
    {
        id: 'announce1',
        title: '欢迎来到 MineVent!',
        content: '发现、加入并创建精彩的《我的世界》活动。祝您玩得愉快！',
        date: new Date().toISOString()
    },
    {
        id: 'announce2',
        title: '新功能：仪表盘公告',
        content: '现在您可以在仪表盘查阅最新公告了。',
        date: new Date(Date.now() - 86400000).toISOString()
    }
];
async function initializeFile(filePath, defaultContent, fileNameForLog) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR} for ${fileNameForLog}. Returning in-memory defaults.`, mkdirError);
            return defaultContent.map((item)=>({
                    ...item
                }));
        }
    }
    try {
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        if (!Array.isArray(data) || Array.isArray(data) && data.length === 0 && defaultContent.length > 0) {
            console.warn(`${fileNameForLog} is empty or not a valid array. Attempting to initialize with default data.`);
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(defaultContent, null, 2), 'utf-8');
            } catch (writeError) {
                console.error(`CRITICAL: Failed to write ${fileNameForLog} during initialization. Proceeding with in-memory defaults. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
                return defaultContent.map((item)=>({
                        ...item
                    }));
            }
            return defaultContent.map((item)=>({
                    ...item
                }));
        }
        return data.map((item)=>({
                ...item
            }));
    } catch (error) {
        console.warn(`Error reading/parsing ${fileNameForLog}, or file not found. Attempting to initialize with default data. Error: ${error instanceof Error ? error.message : String(error)}`);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(defaultContent, null, 2), 'utf-8');
        } catch (writeError) {
            console.error(`CRITICAL: Failed to write ${fileNameForLog} during recovery initialization. Proceeding with in-memory defaults. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
            return defaultContent.map((item)=>({
                    ...item
                }));
        }
        return defaultContent.map((item)=>({
                ...item
            }));
    }
}
async function initializeUsersFile() {
    const filePath = USERS_FILE;
    const fileNameForLog = 'users.json';
    let usersFromFile = [];
    let needsWrite = false;
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR}. Returning in-memory default users.`, mkdirError);
            return defaultUsers.map((u)=>({
                    ...u
                }));
        }
        console.warn(`${fileNameForLog} not found (data directory created). Initializing with default users.`);
        usersFromFile = defaultUsers.map((u)=>({
                ...u
            }));
        needsWrite = true;
    }
    if (!needsWrite) {
        try {
            const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
            const parsedData = JSON.parse(fileContent);
            if (!Array.isArray(parsedData)) {
                console.warn(`${fileNameForLog} content is not a valid array. Initializing with default users.`);
                usersFromFile = defaultUsers.map((u)=>({
                        ...u
                    }));
                needsWrite = true;
            } else if (parsedData.length === 0 && defaultUsers.length > 0) {
                console.warn(`${fileNameForLog} was an empty array. Initializing with default users.`);
                usersFromFile = defaultUsers.map((u)=>({
                        ...u
                    }));
                needsWrite = true;
            } else {
                usersFromFile = parsedData.map((u)=>({
                        ...u
                    }));
                defaultUsers.forEach((defaultUser)=>{
                    if (!usersFromFile.some((u)=>u.id === defaultUser.id)) {
                        console.warn(`Default user ${defaultUser.username} (ID: ${defaultUser.id}) missing from ${fileNameForLog}. Adding.`);
                        usersFromFile.push({
                            ...defaultUser
                        });
                        needsWrite = true;
                    }
                });
                usersFromFile.forEach((user)=>{
                    let userModified = false;
                    if (user.op === undefined) {
                        user.op = 0;
                        userModified = true;
                    }
                    if (!Array.isArray(user.joinedEventIds)) {
                        user.joinedEventIds = [];
                        userModified = true;
                    }
                    if (!user.avatarUrl && user.username) {
                        user.avatarUrl = `https://placehold.co/100x100.png?text=${user.username.substring(0, 2).toUpperCase()}`;
                        userModified = true;
                    }
                    if (user.password === undefined) {
                        const defaultRefUser = defaultUsers.find((du)=>du.id === user.id);
                        user.password = defaultRefUser?.password || '123456'; // Fallback password
                        userModified = true;
                    }
                    if (userModified) {
                        needsWrite = true;
                    }
                });
            }
        } catch (error) {
            console.warn(`Error reading/parsing ${fileNameForLog}, or file not found. Initializing with default users. Error: ${error instanceof Error ? error.message : String(error)}`);
            usersFromFile = defaultUsers.map((u)=>({
                    ...u
                }));
            needsWrite = true;
        }
    }
    if (needsWrite) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(usersFromFile, null, 2), 'utf-8');
        } catch (writeError) {
            console.error(`CRITICAL: Failed to write ${fileNameForLog} during initialization/update. Proceeding with in-memory version. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
        }
    }
    return usersFromFile.map((u)=>({
            ...u
        }));
}
let usersCache = null;
let eventsCache = null;
let announcementsCache = null;
let lastUsersReadTime = 0;
let lastEventsReadTime = 0;
let lastAnnouncementsReadTime = 0;
const CACHE_DURATION = 500; // Reduced for more frequent checks during dev
async function ensureDataFilesInitialized() {
    const currentTime = Date.now();
    try {
        if (!usersCache || currentTime - lastUsersReadTime > CACHE_DURATION) {
            usersCache = await initializeUsersFile();
            lastUsersReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeUsersFile. Falling back to default users for cache.", e);
        usersCache = defaultUsers.map((u)=>({
                ...u
            }));
        lastUsersReadTime = currentTime;
    }
    try {
        if (!eventsCache || currentTime - lastEventsReadTime > CACHE_DURATION) {
            eventsCache = await initializeFile(EVENTS_FILE, defaultEvents, 'events.json');
            lastEventsReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeFile for events. Falling back to default events for cache.", e);
        eventsCache = defaultEvents.map((ev)=>({
                ...ev
            }));
        lastEventsReadTime = currentTime;
    }
    try {
        if (!announcementsCache || currentTime - lastAnnouncementsReadTime > CACHE_DURATION) {
            announcementsCache = await initializeFile(ABOUT_USER_FILE, defaultAnnouncements, 'about-user.json');
            lastAnnouncementsReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeFile for announcements. Falling back to default announcements for cache.", e);
        announcementsCache = defaultAnnouncements.map((a)=>({
                ...a
            }));
        lastAnnouncementsReadTime = currentTime;
    }
}
async function readData(filePath) {
    await ensureDataFilesInitialized();
    if (filePath === USERS_FILE && usersCache) return usersCache.map((u)=>({
            ...u
        }));
    if (filePath === EVENTS_FILE && eventsCache) return eventsCache.map((e)=>({
            ...e
        }));
    if (filePath === ABOUT_USER_FILE && announcementsCache) return announcementsCache.map((a)=>({
            ...a
        }));
    console.warn(`Cache miss for ${filePath} after ensureDataFilesInitialized. Reading directly as fallback.`);
    try {
        const jsonData = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        if (!Array.isArray(data)) {
            console.warn(`Data in ${filePath} is not an array. Returning appropriate default.`);
            if (filePath === USERS_FILE) return defaultUsers.map((u)=>({
                    ...u
                }));
            if (filePath === EVENTS_FILE) return defaultEvents.map((e)=>({
                    ...e
                }));
            if (filePath === ABOUT_USER_FILE) return defaultAnnouncements.map((a)=>({
                    ...a
                }));
            return [];
        }
        return data.map((item)=>({
                ...item
            }));
    } catch (error) {
        console.error(`CRITICAL: Unexpected error reading data from ${filePath} during direct read fallback:`, error);
        if (filePath === USERS_FILE) return defaultUsers.map((u)=>({
                ...u
            }));
        if (filePath === EVENTS_FILE) return defaultEvents.map((e)=>({
                ...e
            }));
        if (filePath === ABOUT_USER_FILE) return defaultAnnouncements.map((a)=>({
                ...a
            }));
        return [];
    }
}
async function writeData(filePath, data) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR} during write for ${filePath}.`, mkdirError);
            throw mkdirError;
        }
    }
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, jsonData, 'utf-8');
        const currentTime = Date.now();
        if (filePath === USERS_FILE) {
            usersCache = data.map((u)=>({
                    ...u
                }));
            lastUsersReadTime = currentTime;
        }
        if (filePath === EVENTS_FILE) {
            eventsCache = data.map((e)=>({
                    ...e
                }));
            lastEventsReadTime = currentTime;
        }
        if (filePath === ABOUT_USER_FILE) {
            announcementsCache = data.map((a)=>({
                    ...a
                }));
            lastAnnouncementsReadTime = currentTime;
        }
    } catch (error) {
        console.error(`写入数据错误 ${filePath}:`, error);
        throw error;
    }
}
async function getEvents() {
    return readData(EVENTS_FILE);
}
async function getEventById(id) {
    const events = await readData(EVENTS_FILE);
    return events.find((e)=>e.id === id);
}
async function getEventByCdKey(cdKey) {
    const events = await readData(EVENTS_FILE);
    return events.find((e)=>e.cdKey.toLowerCase() === cdKey.toLowerCase());
}
async function createEvent(eventData, organizerId) {
    const events = await readData(EVENTS_FILE);
    const newEvent = {
        ...eventData,
        id: `event_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        participants: [],
        organizerId
    };
    events.push(newEvent);
    await writeData(EVENTS_FILE, events);
    return {
        ...newEvent
    };
}
async function updateEventById(eventId, eventData) {
    let events = await readData(EVENTS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) {
        return null;
    }
    // Only update allowed fields, preserve participants, id, organizerId
    events[eventIndex] = {
        ...events[eventIndex],
        ...eventData,
        id: events[eventIndex].id,
        participants: events[eventIndex].participants,
        organizerId: events[eventIndex].organizerId
    };
    await writeData(EVENTS_FILE, events);
    return {
        ...events[eventIndex]
    };
}
async function deleteEventById(eventId) {
    let events = await readData(EVENTS_FILE);
    const initialEventCount = events.length;
    events = events.filter((e)=>e.id !== eventId);
    if (events.length === initialEventCount) {
        return {
            success: false,
            message: "活动未找到，无法删除。"
        };
    }
    await writeData(EVENTS_FILE, events);
    // Remove this eventId from all users' joinedEventIds
    let users = await readData(USERS_FILE);
    users = users.map((user)=>{
        if (user.joinedEventIds && user.joinedEventIds.includes(eventId)) {
            return {
                ...user,
                joinedEventIds: user.joinedEventIds.filter((id)=>id !== eventId)
            };
        }
        return user;
    });
    await writeData(USERS_FILE, users);
    return {
        success: true,
        message: "活动已成功删除。"
    };
}
async function joinEvent(userId, eventId, cdKey) {
    let events = await readData(EVENTS_FILE);
    let users = await readData(USERS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const userIndex = users.findIndex((u)=>u.id === userId);
    if (userIndex === -1) return {
        success: false,
        message: '用户未找到。'
    };
    const user = users[userIndex];
    if (event.cdKey.toLowerCase() !== cdKey.toLowerCase()) return {
        success: false,
        message: '无效的活动代码。'
    };
    if (event.participantLimit && event.participants.length >= event.participantLimit) {
        return {
            success: false,
            message: '活动人数已满。'
        };
    }
    if (event.participants.some((p)=>p.id === userId)) {
        return {
            success: true,
            message: '您已加入此活动。',
            event: {
                ...event
            }
        };
    }
    const participant = {
        id: user.id,
        username: user.username,
        avatarUrl: user.avatarUrl,
        isCheckedIn: false,
        op: user.op || 0,
        password: user.password
    };
    event.participants.push(participant);
    if (!user.joinedEventIds) user.joinedEventIds = [];
    if (!user.joinedEventIds.includes(eventId)) user.joinedEventIds.push(eventId);
    events[eventIndex] = event;
    users[userIndex] = user;
    await writeData(EVENTS_FILE, events);
    await writeData(USERS_FILE, users);
    return {
        success: true,
        message: '成功加入活动！',
        event: {
            ...events[eventIndex]
        }
    };
}
async function leaveEvent(userId, eventId) {
    let events = await readData(EVENTS_FILE);
    let users = await readData(USERS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const userIndex = users.findIndex((u)=>u.id === userId);
    if (userIndex === -1) return {
        success: false,
        message: '用户未找到。'
    };
    const user = users[userIndex];
    const participantIndexInEvent = event.participants.findIndex((p)=>p.id === userId);
    if (participantIndexInEvent === -1) {
        if (user.joinedEventIds && user.joinedEventIds.includes(eventId)) {
            user.joinedEventIds = user.joinedEventIds.filter((id)=>id !== eventId);
            users[userIndex] = user;
            await writeData(USERS_FILE, users);
            return {
                success: true,
                message: '已从您的活动列表中移除。您并未实际参加此活动。',
                event: {
                    ...events[eventIndex]
                }
            };
        }
        return {
            success: false,
            message: '您当前未加入此活动。'
        };
    }
    event.participants.splice(participantIndexInEvent, 1);
    if (user.joinedEventIds) user.joinedEventIds = user.joinedEventIds.filter((id)=>id !== eventId);
    events[eventIndex] = event;
    users[userIndex] = user;
    await writeData(EVENTS_FILE, events);
    await writeData(USERS_FILE, users);
    return {
        success: true,
        message: '成功离开活动。',
        event: {
            ...events[eventIndex]
        }
    };
}
async function checkInUser(userId, eventId) {
    let events = await readData(EVENTS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const participantIndexInEvent = event.participants.findIndex((p)=>p.id === userId);
    if (participantIndexInEvent === -1) return {
        success: false,
        message: '您未报名参加此活动。'
    };
    const participant = event.participants[participantIndexInEvent];
    if (participant.isCheckedIn) return {
        success: true,
        message: '您已签到。'
    };
    const eventDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.date);
    const today = new Date();
    const isCurrent = eventDate.getFullYear() === today.getFullYear() && eventDate.getMonth() === today.getMonth() && eventDate.getDate() === today.getDate();
    if (!isCurrent) {
        return {
            success: false,
            message: '此活动的签到尚未开始或已结束。'
        };
    }
    participant.isCheckedIn = true;
    event.participants[participantIndexInEvent] = participant;
    events[eventIndex] = event;
    await writeData(EVENTS_FILE, events);
    return {
        success: true,
        message: '签到成功！'
    };
}
async function getUserById(userId) {
    const users = await readData(USERS_FILE);
    return users.find((u)=>u.id === userId);
}
async function getUserByUsername(username) {
    const users = await readData(USERS_FILE);
    return users.find((u)=>u.username.toLowerCase() === username.toLowerCase());
}
async function createUser(userData) {
    const users = await readData(USERS_FILE);
    const existingUser = users.find((u)=>u.id === userData.id || u.username.toLowerCase() === userData.username.toLowerCase());
    if (existingUser) {
        console.warn(`尝试创建已存在的用户: ${userData.username} (ID: ${userData.id})。返回现有用户。`);
        return {
            ...existingUser
        };
    }
    const newUser = {
        id: userData.id,
        username: userData.username,
        avatarUrl: `https://placehold.co/100x100.png?text=${userData.username.substring(0, 2).toUpperCase()}`,
        op: 0,
        joinedEventIds: [],
        password: userData.password
    };
    users.push(newUser);
    try {
        await writeData(USERS_FILE, users);
    } catch (error) {
        console.error("创建用户时写入数据失败:", error);
    }
    return {
        ...newUser
    };
}
async function getAnnouncements() {
    return readData(ABOUT_USER_FILE);
}
}}),
"[project]/src/lib/namemc.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"4081e2ef30dd72639bf9d57d98edfb2e2fc14252a0":"checkNameMC"} */ __turbopack_context__.s({
    "checkNameMC": (()=>checkNameMC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkNameMC(username) {
    console.log(`Pretending to check NameMC for username: ${username}`);
    // In a real scenario:
    // try {
    //   // Example: const response = await fetch(`https://api.namemc.com/profile/${username}/uuid`);
    //   // return response.ok;
    // } catch (error) {
    //   console.error("NameMC check failed:", error);
    //   return false;
    // }
    // For testing the "invalid" path in the login flow
    if (username.toLowerCase() === "invalid_player_for_testing") {
        console.log(`Mock: Username "${username}" is considered invalid by NameMC.`);
        return false;
    }
    // Mock: assume most usernames are valid for now
    console.log(`Mock: Username "${username}" is considered valid by NameMC.`);
    return true;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    checkNameMC
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkNameMC, "4081e2ef30dd72639bf9d57d98edfb2e2fc14252a0", null);
}}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"000a3c0459b110a23277041375a40884fd7894f8af":"getSessionUser","002dca974b2b2dbfb79c18855941474a44960be452":"logout","00a2cba85f720f47947bfd867820e76e5eb45548b1":"getEventsAction","00e40d1753d2794c1a1b8ac004bf987b29297ef20f":"getAnnouncementsAction","40025ab292c69b6d0d92536eed959d4b0a09b21e4a":"getUserProfile","40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa":"checkInAction","408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115":"getEventDetailsAction","40c9e4d36476a8eadf64425c058d41fa958826253d":"leaveEventAction","40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b":"joinEventUsingCdKeyOnlyAction","600d96d8a257cd66bdea1261d22e70a359d4c7105b":"createEventAction","600ff814380961b1677e537ea3efea0cdc5011f63e":"authenticateUserAction","6037c7960096ccccc14cc1b320b52c21347f2a3cd1":"updateEventAction","60afbb9bb41755531d36134ffd78b9f4726ef1b247":"deleteEventAction","60d2ba7ffe693511748e8889b5aa0f9b79c91ea589":"joinEventAction"} */ __turbopack_context__.s({
    "authenticateUserAction": (()=>authenticateUserAction),
    "checkInAction": (()=>checkInAction),
    "createEventAction": (()=>createEventAction),
    "deleteEventAction": (()=>deleteEventAction),
    "getAnnouncementsAction": (()=>getAnnouncementsAction),
    "getEventDetailsAction": (()=>getEventDetailsAction),
    "getEventsAction": (()=>getEventsAction),
    "getSessionUser": (()=>getSessionUser),
    "getUserProfile": (()=>getUserProfile),
    "joinEventAction": (()=>joinEventAction),
    "joinEventUsingCdKeyOnlyAction": (()=>joinEventUsingCdKeyOnlyAction),
    "leaveEventAction": (()=>leaveEventAction),
    "logout": (()=>logout),
    "updateEventAction": (()=>updateEventAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/namemc.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const MAX_AGE = 60 * 60 * 24 * 30;
const MinecraftUsernameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").max(16, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").regex(/^[a-zA-Z0-9_]+$/, "Minecraft 用户名只能包含字母、数字和下划线。").refine((username)=>!username.startsWith('_') && !username.endsWith('_'), {
    message: "Minecraft 用户名不能以下划线开头或结尾。"
});
const AuthFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    minecraftUsername: MinecraftUsernameSchema,
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(6, "密码至少需要6个字符。"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'login',
        'register'
    ])
}).refine((data)=>{
    if (data.authMode === 'register') {
        return data.password === data.confirmPassword;
    }
    return true;
}, {
    message: "两次输入的密码不匹配。",
    path: [
        "confirmPassword"
    ]
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ authenticateUserAction(prevState, formData) {
    try {
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = AuthFormSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            return {
                message: '输入无效。请检查您填写的信息。',
                errors: validatedFields.error.flatten().fieldErrors,
                success: false
            };
        }
        const { minecraftUsername, password, authMode } = validatedFields.data;
        if (authMode === 'login') {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername); // Case-insensitive check for existence
            if (!user) {
                return {
                    message: '用户不存在。请检查您的用户名或先注册。',
                    errors: {
                        minecraftUsername: [
                            '该用户不存在。'
                        ]
                    },
                    success: false
                };
            }
            // For login, password check should ideally be against the stored username's casing if sensitive,
            // but for this prototype, direct comparison is fine.
            if (user.password !== password) {
                return {
                    message: '密码不正确。',
                    errors: {
                        password: [
                            '密码不正确。'
                        ]
                    },
                    success: false
                };
            }
            // Login successful
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', user.id, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
        // Unreachable, but good practice for type consistency if redirect doesn't happen immediately
        // return { success: true, message: "登录成功！", userId: user.id };
        } else if (authMode === 'register') {
            // Username format is already validated by Zod schema
            // Check NameMC (simulated)
            const isNameMCValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkNameMC"])(minecraftUsername);
            if (!isNameMCValid) {
                return {
                    message: '此 Minecraft 用户名在 NameMC 上无效或无法验证。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名在 NameMC 上无效或无法验证。'
                        ]
                    },
                    success: false
                };
            }
            // Check if username already exists (case-insensitive)
            const existingUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername);
            if (existingUser) {
                return {
                    message: '此 Minecraft 用户名已被注册。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名已被注册。'
                        ]
                    },
                    success: false
                };
            }
            // Create new user
            let newUser = null;
            try {
                newUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"])({
                    id: minecraftUsername,
                    username: minecraftUsername,
                    password: password
                });
            } catch (error) {
                console.error("authenticateUserAction - Registration - apiCreateUser failed:", error);
                return {
                    message: `创建用户时出错: ${error.message || '未知错误'}`,
                    errors: {
                        form: [
                            `创建用户时出错: ${error.message || '未知错误'}`
                        ]
                    },
                    success: false
                };
            }
            if (!newUser || !newUser.id) {
                return {
                    message: '创建用户后未能获取用户信息。',
                    errors: {
                        form: [
                            '创建用户后未能获取用户信息。'
                        ]
                    },
                    success: false
                };
            }
            // Registration successful, log in the new user
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', newUser.id, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
        // Unreachable
        // return { success: true, message: "注册成功！", userId: newUser.id };
        } else {
            return {
                message: "无效的操作模式。",
                success: false,
                errors: {
                    authMode: [
                        "无效的操作模式。"
                    ]
                }
            };
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
            throw error; // Re-throw NEXT_REDIRECT error
        }
        console.error("Authenticate User Action - Server Error:", error);
        return {
            message: '认证过程中发生服务器内部错误，请稍后再试。',
            success: false,
            errors: {
                form: [
                    '认证过程中发生服务器内部错误，请稍后再试。'
                ]
            }
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete('userId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSessionUser() {
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().get('userId')?.value;
    if (!userId) return null;
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
        return user || null;
    } catch (error) {
        console.error("获取会话用户失败:", error);
        return null;
    }
}
const CreateEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "活动名称至少需要3个字符。"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().refine((date)=>!isNaN(Date.parse(date)), "无效的日期格式。"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, "描述至少需要10个字符。"),
    participantLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>val === "" || val === null || val === undefined ? undefined : Number(val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().positive().optional()),
    cdKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(4, "活动代码至少需要4个字符。").max(20, "活动代码最多20个字符。"),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url("无效的图片链接。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    userPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "您的账户密码不能为空。")
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createEventAction(prevState, formData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = CreateEventSchema.safeParse(rawFormData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: '创建活动失败。请检查所填字段。',
            success: false
        };
    }
    const user = await getSessionUser();
    if (!user) {
        return {
            message: '需要认证才能创建活动。请先登录。',
            errors: {},
            success: false
        };
    }
    if (user.op !== 1) {
        return {
            message: '您没有创建活动的权限。',
            errors: {},
            success: false
        };
    }
    if (!user.password || user.password !== validatedFields.data.userPassword) {
        return {
            errors: {
                ...validatedFields.error?.flatten().fieldErrors || {},
                userPassword: [
                    '您的账户密码不正确。'
                ]
            },
            message: '创建活动失败。账户密码验证失败。',
            success: false
        };
    }
    let newEventId;
    try {
        const { userPassword, ...eventDataForApi } = validatedFields.data;
        const newEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"])(eventDataForApi, user.id);
        newEventId = newEvent.id;
    } catch (error) {
        console.error("创建活动错误:", error);
        return {
            message: '在服务器上创建活动失败。请稍后重试。',
            errors: {},
            success: false
        };
    }
    if (newEventId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${newEventId}`);
    } else {
        return {
            message: '创建活动后未能获取活动ID。',
            errors: {},
            success: false
        };
    }
}
const UpdateEventSchema = CreateEventSchema.extend({
    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "Event ID is required.")
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateEventAction(prevState, formData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = UpdateEventSchema.safeParse(rawFormData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: '更新活动失败。请检查所填字段。',
            success: false
        };
    }
    const user = await getSessionUser();
    if (!user) {
        return {
            message: '需要认证才能更新活动。请先登录。',
            errors: {},
            success: false
        };
    }
    if (user.op !== 1) {
        return {
            message: '您没有更新活动的权限。',
            errors: {},
            success: false
        };
    }
    if (!user.password || user.password !== validatedFields.data.userPassword) {
        return {
            errors: {
                ...validatedFields.error?.flatten().fieldErrors || {},
                userPassword: [
                    '您的账户密码不正确。'
                ]
            },
            message: '更新活动失败。账户密码验证失败。',
            success: false
        };
    }
    try {
        const { userPassword, eventId, ...eventDataToUpdate } = validatedFields.data;
        const updatedEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEventById"])(eventId, eventDataToUpdate);
        if (!updatedEvent) {
            return {
                message: '更新活动失败，活动未找到。',
                errors: {
                    eventId: [
                        '活动未找到。'
                    ]
                },
                success: false
            };
        }
    } catch (error) {
        console.error("更新活动错误:", error);
        return {
            message: '在服务器上更新活动失败。请稍后重试。',
            errors: {},
            success: false
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${validatedFields.data.eventId}`);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteEventAction(eventId, userPassword) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '需要认证才能删除活动。请先登录。'
        };
    }
    if (user.op !== 1) {
        return {
            success: false,
            message: '您没有删除活动的权限。'
        };
    }
    if (!user.password || user.password !== userPassword) {
        return {
            success: false,
            message: '您的账户密码不正确，无法删除活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEventById"])(eventId);
        return result;
    } catch (error) {
        console.error("删除活动错误:", error);
        return {
            success: false,
            message: '在服务器上删除活动失败。请稍后重试。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEventAction(eventId, cdKeyInput) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能加入活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEvent"])(user.id, eventId, cdKeyInput);
        return result;
    } catch (error) {
        console.error("加入活动错误:", error);
        return {
            success: false,
            message: '加入活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEventUsingCdKeyOnlyAction(cdKey) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能加入活动。'
        };
    }
    if (!cdKey || cdKey.trim() === '') {
        return {
            success: false,
            message: '请输入有效的活动代码。'
        };
    }
    const eventToJoin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventByCdKey"])(cdKey);
    if (!eventToJoin) {
        return {
            success: false,
            message: '具有此活动代码的活动未找到。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEvent"])(user.id, eventToJoin.id, cdKey);
        return result;
    } catch (error) {
        console.error("使用活动代码加入活动错误:", error);
        return {
            success: false,
            message: '使用活动代码加入活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ leaveEventAction(eventId) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能离开活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leaveEvent"])(user.id, eventId);
        return result;
    } catch (error) {
        console.error("离开活动错误:", error);
        return {
            success: false,
            message: '离开活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkInAction(eventId) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能签到。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkInUser"])(user.id, eventId);
        return result;
    } catch (error) {
        console.error("签到错误:", error);
        return {
            success: false,
            message: '签到过程中发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventDetailsAction(eventId) {
    try {
        const event = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventById"])(eventId);
        return event || null;
    } catch (error) {
        console.error("获取活动详情错误 (action):", error);
        return null;
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventsAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"])();
    } catch (error) {
        console.error("获取所有活动失败 (action):", error);
        return [];
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserProfile(userId) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
    if (!user) {
        console.warn(`用户个人资料未找到: ${userId}`);
        return null;
    }
    const allEvents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"])();
    const joinedEventIds = user.joinedEventIds || [];
    const joinedEventsRaw = allEvents.filter((event)=>joinedEventIds.includes(event.id));
    const participantUserIdsInJoinedEvents = new Set();
    joinedEventsRaw.forEach((event)=>{
        (event.participants || []).forEach((p)=>participantUserIdsInJoinedEvents.add(p.id));
    });
    const allParticipantUsersData = [];
    for (const pId of Array.from(participantUserIdsInJoinedEvents)){
        const pUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(pId);
        if (pUser) {
            allParticipantUsersData.push(pUser);
        }
    }
    const enrichedJoinedEvents = joinedEventsRaw.map((ev)=>{
        const mainEventParticipantsEnriched = (ev.participants || []).map((p)=>{
            const fullPUser = allParticipantUsersData.find((up)=>up.id === p.id);
            return {
                id: p.id,
                username: fullPUser?.username || p.username || '未知用户',
                avatarUrl: fullPUser?.avatarUrl || p.avatarUrl || `https://placehold.co/40x40.png?text=${(p.username || '??').substring(0, 2)}`,
                isCheckedIn: p.isCheckedIn === true,
                op: fullPUser?.op ?? p.op ?? 0,
                password: fullPUser?.password // Ensure password is part of participant if needed by UserAvatar or other components
            };
        });
        return {
            ...ev,
            participants: mainEventParticipantsEnriched
        };
    });
    return {
        user: {
            ...user
        },
        joinedEvents: enrichedJoinedEvents.map((e)=>({
                ...e
            }))
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAnnouncementsAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncements"])();
    } catch (error) {
        console.error("获取公告失败 (action):", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    authenticateUserAction,
    logout,
    getSessionUser,
    createEventAction,
    updateEventAction,
    deleteEventAction,
    joinEventAction,
    joinEventUsingCdKeyOnlyAction,
    leaveEventAction,
    checkInAction,
    getEventDetailsAction,
    getEventsAction,
    getUserProfile,
    getAnnouncementsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(authenticateUserAction, "600ff814380961b1677e537ea3efea0cdc5011f63e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "002dca974b2b2dbfb79c18855941474a44960be452", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "000a3c0459b110a23277041375a40884fd7894f8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEventAction, "600d96d8a257cd66bdea1261d22e70a359d4c7105b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEventAction, "6037c7960096ccccc14cc1b320b52c21347f2a3cd1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEventAction, "60afbb9bb41755531d36134ffd78b9f4726ef1b247", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventAction, "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventUsingCdKeyOnlyAction, "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(leaveEventAction, "40c9e4d36476a8eadf64425c058d41fa958826253d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkInAction, "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventDetailsAction, "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventsAction, "00a2cba85f720f47947bfd867820e76e5eb45548b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "40025ab292c69b6d0d92536eed959d4b0a09b21e4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnnouncementsAction, "00e40d1753d2794c1a1b8ac004bf987b29297ef20f", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "00a2cba85f720f47947bfd867820e76e5eb45548b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventsAction"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncementsAction"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkInAction"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventDetailsAction"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leaveEventAction"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventUsingCdKeyOnlyAction"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEventAction"]),
    "600ff814380961b1677e537ea3efea0cdc5011f63e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateUserAction"]),
    "6037c7960096ccccc14cc1b320b52c21347f2a3cd1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEventAction"]),
    "60afbb9bb41755531d36134ffd78b9f4726ef1b247": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEventAction"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000a3c0459b110a23277041375a40884fd7894f8af"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dca974b2b2dbfb79c18855941474a44960be452"]),
    "00a2cba85f720f47947bfd867820e76e5eb45548b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00a2cba85f720f47947bfd867820e76e5eb45548b1"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e40d1753d2794c1a1b8ac004bf987b29297ef20f"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40025ab292c69b6d0d92536eed959d4b0a09b21e4a"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c9e4d36476a8eadf64425c058d41fa958826253d"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600d96d8a257cd66bdea1261d22e70a359d4c7105b"]),
    "600ff814380961b1677e537ea3efea0cdc5011f63e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600ff814380961b1677e537ea3efea0cdc5011f63e"]),
    "6037c7960096ccccc14cc1b320b52c21347f2a3cd1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6037c7960096ccccc14cc1b320b52c21347f2a3cd1"]),
    "60afbb9bb41755531d36134ffd78b9f4726ef1b247": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60afbb9bb41755531d36134ffd78b9f4726ef1b247"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60d2ba7ffe693511748e8889b5aa0f9b79c91ea589"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This layout is now simplified as RootLayout handles global Header, Sidebar, and Footer.
// It can be a pass-through or removed if the (app) group is no longer needed for other reasons.
__turbopack_context__.s({
    "default": (()=>AppLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AppLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}}),
"[project]/src/components/loading-link.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/loading-link.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/loading-link.tsx <module evaluation>", "default");
}}),
"[project]/src/components/loading-link.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/loading-link.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/loading-link.tsx", "default");
}}),
"[project]/src/components/loading-link.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loading$2d$link$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/loading-link.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loading$2d$link$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/loading-link.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loading$2d$link$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/avatar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Avatar() from the server but Avatar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "Avatar");
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarFallback() from the server but AvatarFallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "AvatarFallback");
const AvatarImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarImage() from the server but AvatarImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "AvatarImage");
}}),
"[project]/src/components/ui/avatar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Avatar() from the server but Avatar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "Avatar");
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarFallback() from the server but AvatarFallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "AvatarFallback");
const AvatarImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarImage() from the server but AvatarImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "AvatarImage");
}}),
"[project]/src/components/ui/avatar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/user-avatar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-rsc] (ecmascript)");
;
;
function UserAvatar({ user, className }) {
    const fallbackText = user.username ? user.username.substring(0, 2).toUpperCase() : "??";
    // Default to a generic placeholder if avatarUrl is not provided
    const imageSrc = user.avatarUrl || `https://placehold.co/40x40.png`;
    // The data-ai-hint can guide image selection if a service uses it later
    const aiHint = user.username ? `minecraft ${user.username}` : "minecraft character";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Avatar"], {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AvatarImage"], {
                src: imageSrc,
                alt: user.username || '用户头像',
                "data-ai-hint": aiHint
            }, void 0, false, {
                fileName: "[project]/src/components/user-avatar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                children: fallbackText
            }, void 0, false, {
                fileName: "[project]/src/components/user-avatar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user-avatar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/event-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEventStatus": (()=>getEventStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isPast.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isEqual.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
;
function getEventStatus(eventDate) {
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(eventDate);
    const today = new Date();
    const eventDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEqual"])(eventDay, currentDay)) {
        return 'current';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isPast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPast"])(date)) {
        return 'past';
    }
    return 'upcoming';
}
}}),
"[project]/src/components/event-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loading$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/loading-link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2d$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user-avatar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-rsc] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-rsc] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/zh-CN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$event$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/event-utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function EventCard({ event }) {
    const eventStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$event$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventStatus"])(event.date);
    const formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.date), 'MM月d日 HH:mm', {
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zhCN"]
    });
    const statusTextMap = {
        upcoming: '即将开始',
        current: '进行中',
        past: '已结束'
    };
    const statusColors = {
        upcoming: 'bg-blue-500 hover:bg-blue-600',
        current: 'bg-green-500 hover:bg-green-600',
        past: 'bg-gray-500 hover:bg-gray-500'
    };
    const getImageHint = (eventName)=>{
        if (eventName.toLowerCase().includes('survival') || eventName.toLowerCase().includes('生存')) return "minecraft survival";
        if (eventName.toLowerCase().includes('build') || eventName.toLowerCase().includes('建筑')) return "minecraft build";
        if (eventName.toLowerCase().includes('parkour') || eventName.toLowerCase().includes('跑酷')) return "minecraft parkour";
        if (eventName.toLowerCase().includes('redstone') || eventName.toLowerCase().includes('红石')) return "minecraft redstone";
        return "minecraft game";
    };
    const imageUrl = event.imageUrl || `https://placehold.co/400x200.png`;
    const aiHint = getImageHint(event.name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: imageUrl,
                        alt: event.name,
                        layout: "fill",
                        objectFit: "cover",
                        "data-ai-hint": aiHint
                    }, void 0, false, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                        className: `absolute top-2 right-2 text-white px-2 py-1 text-xs font-semibold rounded ${statusColors[eventStatus]}`,
                        children: statusTextMap[eventStatus]
                    }, void 0, false, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/event-card.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-bold",
                        children: event.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                        className: "flex items-center text-sm text-muted-foreground pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            " ",
                            formattedDate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/event-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground line-clamp-3 mb-4",
                        children: event.description.split('\n')[0].replace(/^[#\\s>*-]+/, '')
                    }, void 0, false, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: [
                                    event.participants.length,
                                    " / ",
                                    event.participantLimit || '∞',
                                    " 参与者"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "活动代码: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        children: event.cdKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/event-card.tsx",
                                        lineNumber: 79,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    event.participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-semibold mb-1 text-muted-foreground",
                                children: "部分参与者:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex -space-x-2 overflow-hidden",
                                children: [
                                    event.participants.slice(0, 5).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2d$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            user: p,
                                            className: "h-6 w-6 border-2 border-card"
                                        }, p.id, false, {
                                            fileName: "[project]/src/components/event-card.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)),
                                    event.participants.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-6 w-6 rounded-full bg-muted text-muted-foreground text-xs border-2 border-card",
                                        children: [
                                            "+",
                                            event.participants.length - 5
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/event-card.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/event-card.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    className: "w-full",
                    variant: "default",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$loading$2d$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/events/${event.id}`,
                        children: [
                            "查看活动 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "ml-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/event-card.tsx",
                                lineNumber: 100,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/event-card.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/event-card.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/event-card.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/event-card.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(app)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage),
    "dynamic": (()=>dynamic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$event$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/event-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-rsc] (ecmascript) <export default as CalendarX>");
;
;
;
;
;
const dynamic = 'force-dynamic';
async function HomePage() {
    const allEvents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"])();
    // Sort events by date in descending order (newest first)
    const sortedEvents = allEvents.sort((a, b)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(b.date).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(a.date).getTime();
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold tracking-tight text-foreground",
                children: "所有活动"
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            sortedEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center py-12 min-h-[calc(100vh-22rem)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__["CalendarX"], {
                        className: "h-16 w-16 text-muted-foreground/70 mb-6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-muted-foreground mb-3",
                        children: "暂无活动"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/page.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground max-w-md",
                        children: "当前没有任何《我的世界》活动。您可以稍后再回来查看，或者如果您是管理员，可以尝试创建一个新的活动！"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                children: sortedEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$event$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        event: event
                    }, event.id, false, {
                        fileName: "[project]/src/app/(app)/page.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(app)/page.tsx [app-rsc] (ecmascript)");
;
;
;
async function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__de59b0ae._.js.map