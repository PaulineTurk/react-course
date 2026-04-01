import dayjs from "dayjs"

export function getTime() {
    return dayjs(dayjs().valueOf()).format("HH:mm")
}